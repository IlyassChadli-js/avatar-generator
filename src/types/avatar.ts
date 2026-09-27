export interface AvatarState {
  head: number;
  skin: number;
  hair: number;
  hairColor: number;
  eyes: number;
  mouth: number;
  acc: number;
  bg: number;
}

export interface BackgroundOption {
  name: string;
  color: string;
  isTransparent?: boolean;
}
