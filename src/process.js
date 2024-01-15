const processStuff = function() {
  function getDataObj(data) {
    return {
      current: {
        time: data.current.last_updated,
        text: data.current.condition.text,
        icon: data.current.condition.icon,
        temp_c: data.current.temp_c,
        temp_f: data.current.temp_f,
        cloud: data.current.cloud,
        feelslike_c: data.current.feelslike_c,
        feelslike_f: data.current.feelslike_f,
        wind_kph: data.current.wind_kph,
        wind_mph: data.current.wind_mph,
        humidity: data.current.humidity,
        UVIndex: data.current.uv,
        is_day: data.current.is_day,
        wind_direction: data.current.wind_dir,
        pressure_mbar: data.current.pressure_mb,
      },
      location: {
        country: data.location.country,
        region: data.location.region,
        localTime: data.location.localtime,
        tzID: data.location.tz_id,
        name: data.location.name,
      },
      forecast: [
        {
          hourly: [
            {
              temp_c: data.forecast.forecastday[0].hour[0].temp_c,
              temp_f: data.forecast.forecastday[0].hour[0].temp_f,
              icon: data.forecast.forecastday[0].hour[0].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[0].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[1].temp_c,
              temp_f: data.forecast.forecastday[0].hour[1].temp_f,
              icon: data.forecast.forecastday[0].hour[1].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[1].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[2].temp_c,
              temp_f: data.forecast.forecastday[0].hour[2].temp_f,
              icon: data.forecast.forecastday[0].hour[2].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[2].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[3].temp_c,
              temp_f: data.forecast.forecastday[0].hour[3].temp_f,
              icon: data.forecast.forecastday[0].hour[3].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[3].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[4].temp_c,
              temp_f: data.forecast.forecastday[0].hour[4].temp_f,
              icon: data.forecast.forecastday[0].hour[4].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[4].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[5].temp_c,
              temp_f: data.forecast.forecastday[0].hour[5].temp_f,
              icon: data.forecast.forecastday[0].hour[5].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[5].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[6].temp_c,
              temp_f: data.forecast.forecastday[0].hour[6].temp_f,
              icon: data.forecast.forecastday[0].hour[6].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[6].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[7].temp_c,
              temp_f: data.forecast.forecastday[0].hour[7].temp_f,
              icon: data.forecast.forecastday[0].hour[7].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[7].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[8].temp_c,
              temp_f: data.forecast.forecastday[0].hour[8].temp_f,
              icon: data.forecast.forecastday[0].hour[8].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[8].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[9].temp_c,
              temp_f: data.forecast.forecastday[0].hour[9].temp_f,
              icon: data.forecast.forecastday[0].hour[9].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[9].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[10].temp_c,
              temp_f: data.forecast.forecastday[0].hour[10].temp_f,
              icon: data.forecast.forecastday[0].hour[10].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[10].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[11].temp_c,
              temp_f: data.forecast.forecastday[0].hour[11].temp_f,
              icon: data.forecast.forecastday[0].hour[11].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[11].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[12].temp_c,
              temp_f: data.forecast.forecastday[0].hour[12].temp_f,
              icon: data.forecast.forecastday[0].hour[12].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[12].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[13].temp_c,
              temp_f: data.forecast.forecastday[0].hour[13].temp_f,
              icon: data.forecast.forecastday[0].hour[13].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[13].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[14].temp_c,
              temp_f: data.forecast.forecastday[0].hour[14].temp_f,
              icon: data.forecast.forecastday[0].hour[14].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[14].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[15].temp_c,
              temp_f: data.forecast.forecastday[0].hour[15].temp_f,
              icon: data.forecast.forecastday[0].hour[15].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[15].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[16].temp_c,
              temp_f: data.forecast.forecastday[0].hour[16].temp_f,
              icon: data.forecast.forecastday[0].hour[16].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[16].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[17].temp_c,
              temp_f: data.forecast.forecastday[0].hour[17].temp_f,
              icon: data.forecast.forecastday[0].hour[17].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[17].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[18].temp_c,
              temp_f: data.forecast.forecastday[0].hour[18].temp_f,
              icon: data.forecast.forecastday[0].hour[18].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[18].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[19].temp_c,
              temp_f: data.forecast.forecastday[0].hour[19].temp_f,
              icon: data.forecast.forecastday[0].hour[19].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[19].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[20].temp_c,
              temp_f: data.forecast.forecastday[0].hour[20].temp_f,
              icon: data.forecast.forecastday[0].hour[20].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[20].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[21].temp_c,
              temp_f: data.forecast.forecastday[0].hour[21].temp_f,
              icon: data.forecast.forecastday[0].hour[21].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[21].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[22].temp_c,
              temp_f: data.forecast.forecastday[0].hour[22].temp_f,
              icon: data.forecast.forecastday[0].hour[22].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[22].chance_of_rain,
            },
            {
              temp_c: data.forecast.forecastday[0].hour[23].temp_c,
              temp_f: data.forecast.forecastday[0].hour[23].temp_f,
              icon: data.forecast.forecastday[0].hour[23].condition.icon,
              percentRain: data.forecast.forecastday[0].hour[23].chance_of_rain,
            },
          ],
          date: data.forecast.forecastday[0].date,
          maxwind_kph: data.forecast.forecastday[0].day.maxwind_kph,
          maxwind_mph: data.forecast.forecastday[0].day.maxwind_mph,
          averageHumidity: data.forecast.forecastday[0].day.avghumidity,
          sunrise: data.forecast.forecastday[0].astro.sunrise.slice(0, -3),
          sunset: data.forecast.forecastday[0].astro.sunset.slice(0, -3),
          UVIndex: data.forecast.forecastday[0].day.uv,
          willRain: data.forecast.forecastday[0].day.daily_will_it_rain,
          maxTemp_c: data.forecast.forecastday[0].day.maxtemp_c,
          maxTemp_f: data.forecast.forecastday[0].day.maxtemp_f,
          minTemp_c: data.forecast.forecastday[2].day.mintemp_c,
          minTemp_f: data.forecast.forecastday[2].day.mintemp_f,
          text: data.forecast.forecastday[0].day.condition.text,
          icon: data.forecast.forecastday[0].day.condition.icon,
        },
        {

          date: data.forecast.forecastday[1].date,
          maxwind_kph: data.forecast.forecastday[1].day.maxwind_kph,
          maxwind_mph: data.forecast.forecastday[1].day.maxwind_mph,
          averageHumidity: data.forecast.forecastday[1].day.avghumidity,
          sunrise: data.forecast.forecastday[1].astro.sunrise.slice(0, -3),
          sunset: data.forecast.forecastday[1].astro.sunset.slice(0, -3),
          UVIndex: data.forecast.forecastday[1].day.uv,
          willRain: data.forecast.forecastday[1].day.daily_will_it_rain,
          maxTemp_c: data.forecast.forecastday[1].day.maxtemp_c,
          maxTemp_f: data.forecast.forecastday[1].day.maxtemp_f,
          minTemp_c: data.forecast.forecastday[2].day.mintemp_c,
          minTemp_f: data.forecast.forecastday[2].day.mintemp_f,
          text: data.forecast.forecastday[1].day.condition.text,
          icon: data.forecast.forecastday[1].day.condition.icon,
        },
        {

          date: data.forecast.forecastday[2].date,
          maxwind_kph: data.forecast.forecastday[2].day.maxwind_kph,
          maxwind_mph: data.forecast.forecastday[2].day.maxwind_mph,
          averageHumidity: data.forecast.forecastday[2].day.avghumidity,
          sunrise: data.forecast.forecastday[2].astro.sunrise.slice(0, -3),
          sunset: data.forecast.forecastday[2].astro.sunset.slice(0, -3),
          UVIndex: data.forecast.forecastday[2].day.uv,
          willRain: data.forecast.forecastday[2].day.dail_will_it__rain,
          maxTemp_c: data.forecast.forecastday[2].day.maxtemp_c,
          maxTemp_f: data.forecast.forecastday[2].day.maxtemp_f,
          minTemp_c: data.forecast.forecastday[2].day.mintemp_c,
          minTemp_f: data.forecast.forecastday[2].day.mintemp_f,
          text: data.forecast.forecastday[2].day.condition.text,
          icon: data.forecast.forecastday[2].day.condition.icon,
        },
      ],
    };
  };

  return {
    getDataObj,
  };
}();

export default processStuff;