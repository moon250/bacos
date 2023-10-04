type BitfieldFlag = number;

export class Bitfield {
  bitfield = 0x0;

  constructor(bitfield: number) {
    this.bitfield = bitfield;
  }

  public has(flag: BitfieldFlag) {
    return (this.bitfield & flag) === flag;
  }

  public getFlags(): BitfieldFlag[] {
    const flags: BitfieldFlag[] = [];

    // Iterate through all 32 bits (without negatives)
    for (let i = 0; i < 32; i++) {
      const flag = (1 << i) >>> 0;

      if (this.has(flag)) {
        flags.push(flag);
      }
    }

    return flags;
  }

  public add(flag: BitfieldFlag): Bitfield {
    this.bitfield |= flag;

    return this;
  }

  public remove(flag: BitfieldFlag): Bitfield {
    this.bitfield ^= flag;

    return this;
  }
}
