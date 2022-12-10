import axios from 'axios'

export default {
    data() {
        return {
            trenings: [],
            filteredTrenings: [],
            treningsDesc: [],
            proxyTable: [],
        }
    },
    mounted() {
        this.fetchTrenings();
    },
    methods: {
        fetchTrenings() {
            const apitab = [];
    axios
      .get("https://kokartka.stronazen.pl/zapisy/api/workouts")
      .then(function (response) {
        const data = response.data;
        for (let i = 0; i < response.data.length; i++) {
          apitab.push({
            id: data[i].id,
            level: data[i].level,
            firstHour: new Date(data[i].dates[0]).getHours(),
            secondHour: new Date(data[i].dates[1]).getHours(),
            firstDate:
              new Date(data[i].dates[0]).getHours() +
              ":" +
              String(new Date(data[i].dates[0]).getMinutes()).padStart(2, "0"),
            secondDate:
              new Date(data[i].dates[1]).getHours() +
              ":" +
              String(new Date(data[i].dates[1]).getMinutes()).padStart(2, "0"),
            thirdDate: new Date(data[i].dates[2]).getHours() +
              ":" +
              String(new Date(data[i].dates[2]).getMinutes()).padStart(2, "0") ,
            age: String(data[i].age.min) + "-" + String(data[i].age.max),
            filterAgeMin: data[i].age.min,
            filterAgeMax: data[i].age.max,
            firstDay: new Date(data[i].dates[0]).toLocaleDateString("pl-PL", {
              weekday: "long",
            }),
            secondDay: new Date(data[i].dates[1]).toLocaleDateString("pl-PL", {
              weekday: "long",
            }),
            thirdDay: new Date(data[i].dates[2]).toLocaleDateString("pl-PL", {
              weekday: "long",
            }),
            location: data[i].location,
            city: data[i].location_address.city,
            brand: data[i].brand,
            group: data[i].group,
            signUp: data[i].links.registration,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        this.trenings = apitab;
        this.proxyTable = apitab;
        this.isLoaded = true;
        console.log(this.isLoaded);
      });
        }
    }

}