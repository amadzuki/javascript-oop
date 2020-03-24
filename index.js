class MusicalInstrument {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  produceSound = () => {
    console.log(`${this.name} is producing sound`)
  }

  getName() {
    return this.name
  }

  getPrice() {
    return convertToRp(this.price)
  }

  getNameAndPrice() {
    return `This is a ${this.getName()}. The price is ${this.getPrice()}`
  }
}

const convertToRp = number => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(number)
}

class StringInstrument extends MusicalInstrument {
  constructor(name, price, numberOfStrings) {
    super(name, price)

    this.numberOfStrings = numberOfStrings
  }

  getDescription = () => {
    return `${this.getNameAndPrice()}. It has ${this.numberOfStrings} strings`
  }
}

class PercussionInstrument extends MusicalInstrument {
  constructor(name, price, beater, beatenPartMaterial) {
    super(name, price)
    this.beater = beater
    this.beatenPartMaterial = beatenPartMaterial
  }
  getDescription = () => {
    return `${this.getNameAndPrice()}. You can hit it by ${
      this.beater
    } on the part that made from ${this.beatenPartMaterial}. `
  }
}

const guitar = new StringInstrument("Guitar", 1000000, 6)

console.log(guitar.getNameAndPrice())

console.log(guitar.getDescription())

const bongo = new PercussionInstrument("Bongo", 300000, "hand", "animal skin")

console.log(bongo.getDescription())
