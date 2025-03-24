function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.call(obj);
logger.apply(obj);

const bindedLogger = logger.bind(obj);
bindedLogger();
