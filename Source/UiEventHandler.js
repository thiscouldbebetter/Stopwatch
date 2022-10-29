
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
}
