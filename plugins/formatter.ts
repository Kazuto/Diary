import moment from 'moment';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      formatter: {
        date: (date: String) => {
          return moment(date).fromNow()
        },
      },
    },
  };
});
