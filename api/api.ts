import axios from 'axios'
import { Direction } from '../types/direction'

export class DirectionsApi {
  private static instance: DirectionsApi

  private static readonly directionsUrl: string =
    'https://dev7d8d3h4.sova.gg/api/v1/calculator/'
  private static readonly fromUrl: string =
    'https://dev7d8d3h4.sova.gg/api/v1/calculator/from/'
  private static readonly toUrl: string =
    'https://dev7d8d3h4.sova.gg/api/v1/calculator/from/{from_id}/'
  private static readonly formUrl: string =
    'https://dev7d8d3h4.sova.gg/api/v1/calculator/pair/{from_id}/{to_id}/'

  private directions: Direction[] = []

  private constructor() {}

  private async init() {
    const { data, status } = await axios.get(DirectionsApi.directionsUrl, {
      headers: {
        Accept: 'application/json',
      },
    })

    this.directions = data
  }

  public static async getInstance(): Promise<DirectionsApi> {
    if (!DirectionsApi.instance) {
      DirectionsApi.instance = new DirectionsApi()
      await DirectionsApi.instance.init()
    }

    return DirectionsApi.instance
  }

  public async getFrom(): Promise<Direction[]> {
    const { data, status } = await axios.get(DirectionsApi.fromUrl, {
      headers: {
        Accept: 'application/json',
      },
    })

    return this.directions.filter((value: Direction): boolean => {
      const intersection = value.ids.filter((index: number): boolean => {
        return (data as Array<number>).includes(index)
      })

      return intersection.length > 0
    })
  }

  public async getTo(from: number): Promise<Direction[]> {
    const { data, status } = await axios.get(
      DirectionsApi.toUrl.replace('{from_id}', String(from)),
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )

    return this.directions.filter((value: Direction): boolean => {
      const intersection = value.ids.filter((index: number): boolean => {
        return (data as Array<number>).includes(index)
      })

      return intersection.length > 0
    })
  }
}

export async function loadFrom(): Promise<Direction[]> {
  const api = await DirectionsApi.getInstance()

  return api.getFrom()
}
