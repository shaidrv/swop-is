import axios from 'axios'
import { Direction } from '~/types/direction'
import { Form } from '~/types/form'

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

  private async request(url: string): Promise<any> {
    const { data, status } = await axios.get(url, {
      headers: {
        Accept: 'application/json',
      },
    })

    return data
  }

  private getFilteredDirections(directionIds: number[]): Direction[] {
    return this.directions.filter((value: Direction): boolean => {
      const intersection = value.ids.filter((index: number): boolean => {
        return directionIds.includes(index)
      })

      return intersection.length > 0
    })
  }

  public async getFrom(): Promise<Direction[]> {
    const data = await this.request(DirectionsApi.fromUrl)

    return this.getFilteredDirections(data)
  }

  public async getTo(from: number): Promise<Direction[]> {
    const data = await this.request(
      DirectionsApi.toUrl.replace('{from_id}', String(from))
    )

    return this.getFilteredDirections(data)
  }

  public async getForm(from: number, to: number): Promise<Form> {
    return await this.request(
      DirectionsApi.formUrl
        .replace('{from_id}', String(from))
        .replace('{to_id}', String(to))
    )
  }
}
