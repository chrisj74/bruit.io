self.addEventListener('message', function (event) {
  console.log("SW Received Message: " + event.data);
  if (event && event.ports && event.ports[0]) {
    event.ports[0].postMessage("SW Says 'Hello back!'");
  }
});
