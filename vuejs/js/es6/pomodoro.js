const POMODORO_STATES = {
	WORK: 'work',
	REST: 'rest'
};
const STATES = {
	STARTED: 'started',
	STOPPED: 'stopped',
	PAUSED: 'paused'
};
const WORKING_TIME_LENGTH_IN_MINUTES = 50;
const RESTING_TIME_LENGTH_IN_MINUTES = 10;

new Vue({
	el: '#app',
	data: {
		minute: WORKING_TIME_LENGTH_IN_MINUTES,
		second: 0,
		pomodoroState: POMODORO_STATES.WORK,
		timestamp: 0,
		state: STATES.STOPPED
	},
	computed: {
		title: function () {
			return this.pomodoroState === POMODORO_STATES.WORK ? 'Work!' : 'Rest!';
		},
		min: function() {
			if(this.minute < 10)
			{
				return '0' + this.minute;
			}

			return this.minute;
		},
		sec: function() {
			if(this.second < 10)
			{
				return '0' + this.second;
			}

			return this.second;
		}
	},
	methods: {
		start: function() {
			this.state = STATES.STARTED;
			this._tick();
			this.interval = setInterval(this._tick, 1000);
		},
		pause: function() {
			this.state = STATES.PAUSED;
			clearInterval(this.interval);
		},
		stop: function() {
			this.state = STATES.STOPPED;
			clearInterval(this.interval);
			this.pomodoroState = POMODORO_STATES.WORK;
			this.minute = WORKING_TIME_LENGTH_IN_MINUTES;
			this.second = 0;
		},
		_tick: function() {
			if(this.pomodoroState === POMODORO_STATES.REST)
			{
				if(this.second % 10 === 0)
				{
					this.timestamp = new Date().getTime();
				}
			}

			// second가 0이 아니라면 값을 감소시킨다.
			if(this.second !== 0)
			{
				this.second--;
				return;
			}

			// second가 0이고 minute가 0이 아니라면
			// minute를 감소시키고 second를 59로 설정한다.
			if(this.minute !== 0)
			{
				this.minute--;
				this.second = 59;
				return;
			}

			// second와 minute가 0이라면
			// 휴식 시간관 업무 시간을 토글한다.
			this.pomodoroState = this.pomodoroState === POMODORO_STATES.WORK ? POMODORO_STATES.REST : POMODORO_STATES.WORK;
			if(this.pomodoroState === POMODORO_STATES.WORK)
			{
				this.minute = WORKING_TIME_LENGTH_IN_MINUTES;
			}
			else
			{
				this.minute = RESTING_TIME_LENGTH_IN_MINUTES;
			}
		}
	}
});