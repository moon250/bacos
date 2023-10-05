type BitfieldFlag = number;

export class Bitfield<BitFlagType extends BitfieldFlag> {
  bitfield = 0x0;

  constructor(bitfield: number) {
    this.bitfield = bitfield;
  }

  public has(flag: BitFlagType) {
    return (this.bitfield & flag) === flag;
  }

  public getFlags(): BitFlagType[] {
    const flags: BitFlagType[] = [];

    // Iterate through all 32 bits (without negatives)
    for (let i = 0; i < 32; i++) {
      const flag = ((1 << i) >>> 0) as BitFlagType;

      if (this.has(flag)) {
        flags.push(flag);
      }
    }

    return flags;
  }

  public add(flag: BitFlagType): Bitfield<BitFlagType> {
    this.bitfield |= flag;

    return this;
  }

  public remove(flag: BitFlagType): Bitfield<BitFlagType> {
    this.bitfield ^= flag;

    return this;
  }
}
