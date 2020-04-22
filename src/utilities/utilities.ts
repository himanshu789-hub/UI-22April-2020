export function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
}

export function GoToPath(input: string, to: string): string {
  const arr: Array<string> = input.split("/");
  debugger;
  return '/'+arr[1] + "/" + arr[2] + "/" + to;
}
