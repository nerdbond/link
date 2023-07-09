import type {
  LeafCallCast,
  Leaf,
  LeafFallCull,
  LeafFallNick,
  LeafFallText,
  LeafNote,
  LeafComb,
  LeafCode,
  LeafRiseCull,
  LeafRiseNick,
  LeafRiseText,
  LeafCord,
  LeafSize,
} from '../leaf/form.js'
import haveHalt from '@tunebond/have/halt.js'

export enum SiftName {
  FallCull = 'sift-fall-cull',
  FallNest = 'sift-fall-nest',
  FallNick = 'sift-fall-nick',
  FallText = 'sift-fall-text',
  Note = 'sift-note',
  Comb = 'sift-comb',
  Code = 'sift-code',
  RiseCull = 'sift-rise-cull',
  RiseNest = 'sift-rise-nest',
  RiseNick = 'sift-rise-nick',
  RiseText = 'sift-rise-text',
  Cord = 'sift-cord',
  Size = 'sift-size',
  RiseFork = 'sift-rise-fork',
  FallFork = 'sift-fall-fork',
  RiseKnit = 'sift-rise-knit',
  FallKnit = 'sift-fall-knit',
}

export type SiftHash = {
  'sift-fall-cull': SiftFallCull
  'sift-fall-nest': SiftFallNest
  'sift-fall-nick': SiftFallNick
  'sift-fall-text': SiftFallText
  'sift-note': SiftNote
  'sift-comb': SiftComb
  'sift-code': SiftCode
  'sift-rise-cull': SiftRiseCull
  'sift-rise-nest': SiftRiseNest
  'sift-rise-nick': SiftRiseNick
  'sift-rise-text': SiftRiseText
  'sift-cord': SiftCord
  'sift-size': SiftSize
  // this should be called fork
  'sift-rise-fork': SiftRiseFork
  'sift-fall-fork': SiftFallFork
  'sift-rise-knit': SiftRiseKnit
  'sift-fall-knit': SiftFallKnit
}

export type SiftFallCull = {
  form: SiftName.FallCull
  leaf: LeafFallCull
}

export type SiftRiseKnit = {
  form: SiftName.RiseKnit
}

export type SiftFallKnit = {
  form: SiftName.FallKnit
}

export type SiftRiseFork = {
  form: SiftName.RiseFork
}

export type SiftFallFork = {
  form: SiftName.FallFork
}

export type SiftFallNest = {
  form: SiftName.FallNest
}

export type SiftFallNick = {
  form: SiftName.FallNick
  leaf: LeafFallNick
}

export type SiftFallText = {
  form: SiftName.FallText
  leaf: LeafFallText
}

export type SiftNote = {
  form: SiftName.Note
  leaf: LeafNote
}

export type SiftComb = {
  form: SiftName.Comb
  bond: number
  leaf: LeafComb
}

export type SiftCode = {
  bond: number
  mold: string
  form: SiftName.Code
  leaf: LeafCode
}

export type Sift =
  | SiftFallCull
  | SiftFallNick
  | SiftRiseNest
  | SiftFallNest
  | SiftFallText
  | SiftNote
  | SiftComb
  | SiftCode
  | SiftRiseCull
  | SiftRiseNick
  | SiftRiseText
  | SiftCord
  | SiftSize
  | SiftRiseFork
  | SiftFallFork
  | SiftRiseKnit
  | SiftFallKnit

export type SiftRiseCull = {
  form: SiftName.RiseCull
  leaf: LeafRiseCull
}

export type SiftRiseNest = {
  form: SiftName.RiseNest
}

export type SiftRiseNick = {
  size: number
  form: SiftName.RiseNick
  leaf: LeafRiseNick
}

export type SiftRiseText = {
  form: SiftName.RiseText
  leaf: LeafRiseText
}

export type SiftCallCast = LeafCallCast & {
  siftList: Array<Sift>
}

export type SiftCord = {
  form: SiftName.Cord
  leaf: LeafCord
}

export type SiftSize = {
  form: SiftName.Size
  bond: number
  leaf: LeafSize
}

export function testSiftForm<N extends SiftName>(
  lead: unknown,
  name: N,
): lead is SiftHash[N] {
  return (lead as Sift).form === name
}

export function haveSiftForm<N extends SiftName>(
  lead: unknown,
  name: N,
): asserts lead is SiftHash[N] {
  if (!testSiftForm(lead, name)) {
    throw haveHalt('form_miss', { call: name, need: 'sift' })
  }
}