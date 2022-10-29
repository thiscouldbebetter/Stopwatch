
class StopwatchRunner
{
	constructor()
	{
		var platform = new PlatformDom("divStopwatch");
		platform.initialize();
		this.stopwatch = new Stopwatch();
		this.stopwatch.initialize(platform);
	}

	static Instance()
	{
		if (StopwatchRunner._instance == null)
		{
			StopwatchRunner._instance =
				new StopwatchRunner();
		}

		return StopwatchRunner._instance;
	}
}
