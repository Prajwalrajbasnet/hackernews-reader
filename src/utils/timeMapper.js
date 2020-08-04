function getTimeInterval(timestamp) {
  const secondsPassed = Math.floor((new Date() - timestamp * 1000) / 1000);

  let interval = Math.floor(secondsPassed / 31536000);
  if (interval > 1) {
    return `${interval} years ago`;
  }

  interval = Math.floor(secondsPassed / 2592000);
  if (interval > 1) {
    return `${interval} months ago`;
  }

  interval = Math.floor(secondsPassed / 86400);
  if (interval > 1) {
    return `${interval} days ago`;
  }

  interval = Math.floor(secondsPassed / 3600);
  if (interval > 1) {
    return `${interval} hours ago`;
  }

  interval = Math.floor(secondsPassed / 60);
  if (interval > 1) {
    return `${interval} minutes ago`;
  }

  interval = Math.floor(secondsPassed);
  return `${interval} seconds ago`;
}

export { getTimeInterval };
