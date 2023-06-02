interface DirectionDescription {
  notify: string
  min: number
  max: number
  currency: string
  round: number
  monitoringCode: string
}

interface Currency {
  id: number
  currency: string
  active: boolean
}

interface FormStructureImportPart {
  header: string
  placeholder: string
  error: string
  visible: boolean
}

interface FormStructureInput {
  type: string
  name: string
  send: FormStructureImportPart
  receive: FormStructureImportPart
  regex: string
}

interface FormStructureDirection {
  currency: Currency[]
  input: FormStructureInput[]
  network: string[]
  city: string[]
}

interface FormStructure {
  from: FormStructureDirection
  to: FormStructureDirection
}
export interface Form {
  course: number
  bonus: number
  notify: string
  from: DirectionDescription
  to: DirectionDescription
  structure: FormStructure
}
