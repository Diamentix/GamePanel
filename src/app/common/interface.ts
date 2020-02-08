export interface CategoriesResponse {
    _links: any,
    _embedded: EmbeddedCategories,
    total_items: number
  }
  
  export interface EmbeddedCategories {
    game_categories: Array<GameCategory>
  }
  
  export interface GameCategory {
    name: string,
    order: number,
    slug: string,
    _embedded: EmbeddedGames,
    _links: any,
  }

  export interface EmbeddedGames {
      games: Array<Game>;
  }

  export interface Game {
    id: string,
    slug: string,
    background: string,
    description: string,
    game_stakes: any,
    height: string,
    width: string,
    thumbnail: string,
    url: any,
    created_at: any,
    screenshot: any,
    homepage_image: any,
    vendor: string,
    vendor_properties: any,
    meta: any,
    enabled: boolean,
    label: string,
    cols: number,
    rows: number,
    pos_x: any,
    pos_y: any,
    volatility: number,
    rating: number,
    backgrounds: Array<string>,
    screenshots: Array<any>,
    thumbnails: Array<string>,
    jurisdiction: string,
    login_required: boolean,
    _links: any
  }

  export interface GamesResponse {
    _links: any,
    _embedded: EmbeddedGames,
    page_count: number,
    page_size: number,
    total_items: number,
    page: number
  }
