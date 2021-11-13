let input = ["|   ", "/   ", "-   ", "\\   ", "|   ", "/   ", "-   ", "\\   ", "|   ", "\n"]
const spinner = function(array) {
  let timeout = 100;
  for (const value of array) {
    setTimeout(() => {
      process.stdout.write("\r" + value); 
    }, timeout += 200);
  }
}
spinner(input);