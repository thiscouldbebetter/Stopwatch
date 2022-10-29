
class Stopwatch
{
	constructor()
	{
		this.millisecondsRunningSinceLastReset = 0;
		this.timesRecordedAsMilliseconds = [];
	}

	draw()
	{
		var timeHelper = TimeHelper.Instance();

		var timeRunningSinceLastResetAsString =
			timeHelper.millisecondsToStringHMS
			(
				this.millisecondsRunningSinceLastReset 
			);

		var htmlSoFar = timeRunningSinceLastResetAsString;

		for (var i = 0; i < this.timesRecordedAsMilliseconds.length; i++)
		{
			var timeRecordedAsMilliseconds =
				this.timesRecordedAsMilliseconds[i];

			var timeRecordedAsString =
				timeHelper.millisecondsToStringHMS
				(
					timeRecordedAsMilliseconds
				);

			htmlSoFar += "<br />" + timeRecordedAsString;
		}

		this.domElement.innerHTML = htmlSoFar;
	}

	isRunning()
	{
		return (this.timer != null);
	}

	isStopped()
	{
		return (this.timer == null);
	}

	initialize(platform)
	{
		this.platformAddTo(platform);
		this.draw();
	}

	recordTimeWithoutStopping()
	{
		if (this.isStopped())
		{
			this.start();
		}

		this.timesRecordedAsMilliseconds.push(
			this.millisecondsRunningSinceLastReset
		);
		this.draw();
	}

	reset()
	{
		this.millisecondsRunningSinceLastReset = 0;
		this.timesRecordedAsMilliseconds.length = 0;
		this.draw();
	}

	start()
	{
		var now = new Date();
		this.timeStarted = now;
		this.timeAtLastUpdate = now;

		var stopwatch = this;

		this.timer = setInterval
		(
			() => stopwatch.updateForTimerTick(),
			1 // millisecondsPerTick
		);
	}

	startOrStop()
	{
		if (this.isStopped())
		{
			this.start();
		}
		else
		{
			this.stop();
		}
	}

	stop()
	{
		if (this.isRunning())
		{
			clearInterval(this.timer);
			this.timer = null;
		}
	}

	updateForTimerTick()
	{
		var now = new Date();

		var millisecondsSinceLastUpdate =
			(now - this.timeAtLastUpdate);

		this.millisecondsRunningSinceLastReset +=
			millisecondsSinceLastUpdate;

		this.draw();

		this.timeAtLastUpdate = now;
	}

	// Platformable.

	platformAddTo(platformDom)
	{
		var d = document;
		var domElement = d.createElement("div");
		platformDom.domElementAdd(domElement);
		this.domElement = domElement;
	}
}
