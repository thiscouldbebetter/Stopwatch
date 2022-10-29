
class TimeHelper
{
	constructor()
	{
		this.millisecondsPerSecond = 1000;
		this.secondsPerMinute = 60;
		this.minutesPerHour = 60;
	}

	static Instance()
	{
		if (TimeHelper._instance == null)
		{
			TimeHelper._instance = new TimeHelper();
		}
		return TimeHelper._instance;
	}

	millisecondsToStringHMS(millisecondsTotal)
	{
			
		var millisecondsSinceLastFullSecond =
			millisecondsTotal
			% this.millisecondsPerSecond;

		var secondsTotal = Math.floor
		(
			millisecondsTotal
			/ this.millisecondsPerSecond
		);

		var secondsSinceLastFullMinute =
			secondsTotal
			% this.secondsPerMinute;

		var minutesTotal = Math.floor
		(
			secondsTotal
			/ this.secondsPerMinute
		);

		var minutesSinceLastFullHour =
			minutesTotal
			% this.minutesPerHour

		var hoursTotal = Math.floor
		(
			minutesTotal
			/ this.minutesPerHour
		);

		var timeRunningSinceLastResetAsString =
			hoursTotal + "h "
			+ ("" + minutesSinceLastFullHour).padStart(2, "0") + "m "
			+ ("" + secondsSinceLastFullMinute).padStart(2, "0")
			+ "." + ("" + millisecondsSinceLastFullSecond).padStart(3, "0")
			+ "s";

		return timeRunningSinceLastResetAsString;
	}

}
