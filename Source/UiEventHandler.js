
class UiEventHandler
{
	static buttonReset_Clicked()
	{
		StopwatchRunner.Instance().stopwatch.reset();
	}

	static buttonSplit_Clicked()
	{
		StopwatchRunner.Instance().stopwatch.recordTimeWithoutStopping();
	}

	static buttonStartStop_Clicked()
	{
		StopwatchRunner.Instance().stopwatch.startOrStop();
	}

	static body_KeyDown(e)
	{
		var stopwatch = StopwatchRunner.Instance().stopwatch;

		var keyPressed = e.key;
		if (keyPressed == "Enter" || keyPressed == " ")
		{
			stopwatch.startOrStop();
		}
		else if (keyPressed == "Delete")
		{
			stopwatch.reset();
		}
		else if (keyPressed == "/")
		{
			stopwatch.recordTimeWithoutStopping();
		}
	}
}
