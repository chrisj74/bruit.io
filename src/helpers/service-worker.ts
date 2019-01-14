export class ServiceWorkerLog {
  // private worker;

  constructor() {
    this.register()
      .then(() => {
        console.log('OK');
      })
      .catch(err => console.error(err));
  }

  register() {
    // Build a worker from an anonymous function body
    // var blobURL = URL.createObjectURL(
    //   new Blob(
    //     [
    //       '(',

    //       function() {
    //         //Long-running work here
    //       }.toString(),

    //       ')()'
    //     ],
    //     { type: 'application/javascript' }
    //   )
    // );
    // console.log(blobURL);

    return navigator.serviceWorker
      .register('https://unpkg.com/@bruit/component@0.8.0-1/dist/service-worker.js')
      .then((swr: ServiceWorkerRegistration) => {
        console.log('worker rezgistered !!!!!!!!!!', swr);
      })
      .catch(err => {
        console.error('SW ERR = ', err);
      });

    // Won't be needing this anymore
    // URL.revokeObjectURL( blobURL );
  }
}
