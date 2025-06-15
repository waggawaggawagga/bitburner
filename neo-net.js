// sigma-cosmetics.js
export async function main(ns) {
  var serv = 'neo-net';
  while (true) {
      await ns.hack(serv);
      //for (let i = 0; i < 3; i++) {
      var i = 0;
      while (i < 2){
          i++;
          var vol = ns.getServerMoneyAvailable(serv);
          ns.print("Available: " + vol);
          var max = ns.getServerMaxMoney(serv);
          ns.print("Max: " + max);
          if (vol == max) {
              ns.print("Max Growth Achieved.")
              var sec = ns.getServerSecurityLevel(serv);
              var minSec = ns.getServerMinSecurityLevel(serv);
              if (sec == minSec) {
                  ns.print("Min Security Achieved.")
                  ns.print("Hacking first try: " + serv);
                  await ns.hack(serv);
                  ns.print("Hacking second try: " + serv);
                  await ns.hack(serv);
              }
              else {
                  ns.print("Weakening " + serv);
                  await ns.weaken(serv);
              }
          }
          else {
              ns.print("Growing " + serv);
              await ns.grow(serv);
          }
      }
  }
}