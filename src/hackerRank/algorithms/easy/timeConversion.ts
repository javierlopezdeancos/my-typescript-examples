export function timeConversion(s: string): string {
  const amPm = s.slice(s.length - 2, s.length);
  const mins = s.slice(3, 5);
  const secs = s.slice(6, 8);

  let hours = s.slice(0, 2);

  if (amPm === 'AM') {
    if (hours === '12') {
      hours = '00';
    }
  } else if (amPm === 'PM') {
    if (Number(hours) > 12) {
      hours = `${Number(hours) - 12}`;
    } else if (Number(hours) < 12) {
      hours = `${Number(hours) + 12}`;
    }
  }

  return `${hours}:${mins}:${secs}`;
}
