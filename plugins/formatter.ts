import moment from "moment";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      formatter: {
        date: (date: string) => {
          const now = new Date();
          const past = new Date(date);
          const threshold = 24 * 60 * 60 * 1000;

          const diff = now.getTime() - past.getTime();

          return diff >= threshold
            ? past.toLocaleString("de-DE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : moment(date).fromNow();
        },
      },
    },
  };
});
