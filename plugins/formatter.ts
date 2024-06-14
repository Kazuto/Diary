import moment from "moment";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      formatter: {
        date: (date: string) => {
          return moment(date).fromNow();
        },
      },
    },
  };
});
