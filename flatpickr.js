document.addEventListener('DOMContentLoaded', function () {
  const calendarTitle = document.getElementById('calendar-title');
  const btnPrev = document.getElementById('calendar-prev');
  const btnNext = document.getElementById('calendar-next');

  const fp = flatpickr('#trip-calendar', {
    inline: true,
    locale: 'en',
    defaultDate: 'today',
    minDate: 'today',

    onReady: function (selectedDates, dateStr, instance) {
      updateTitle(instance);
    },
    onMonthChange: function (selectedDates, dateStr, instance) {
      updateTitle(instance);
    },
  });

  function updateTitle(instance) {
    const m = instance.currentMonth;
    const y = instance.currentYear;
    const monthName = instance.l10n.months.longhand[m];
    calendarTitle.textContent = `${monthName} ${y}`;
  }

  btnPrev.addEventListener('click', () => {
    fp.changeMonth(-1);
  });

  btnNext.addEventListener('click', () => {
    fp.changeMonth(1);
  });
});
