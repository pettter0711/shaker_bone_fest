const fetchApi = async (root) => {
    try {
        let response = await fetch(root);
        let data = await response.json();
        return data ? data : [];
    } catch (error) {
        console.error(error);
        return [];
    }
};

const countDown = (month, day, hour, min, sec) => {
    const initEnd = () => {
        let end = new Date();
        end.setMonth(month - 1);
        end.setDate(day);
        end.setHours(hour);
        end.setMinutes(min);
        end.setSeconds(sec);

        return end;
    };

    const calc = (end) => {
        let current = new Date().getTime();
        let diff = (end - current) / 1000;

        let units = {
            days: 60 * 60 * 24,
            hours: 60 * 24,
            min: 60,
        };

        let days = Math.floor(diff / units.days);

        diff = diff % units.days;
        let hours = Math.floor(diff / units.hours);

        diff = diff % units.hours;
        let min = Math.floor(diff / units.min);

        let sec = Math.floor(diff % units.min);

        let counts = {
            days: days < 10 ? "0" + days : days,
            hours: hours < 10 ? "0" + hours : hours,
            minutes: min < 10 ? "0" + min : min,
            seconds: sec < 10 ? "0" + sec : sec,
        };

        return counts;
    };

    let end = initEnd();
    let output = calc(end);

    return output;
};

export { fetchApi, countDown };
