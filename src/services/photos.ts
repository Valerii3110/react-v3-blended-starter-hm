import axios from 'axios';
import type { PexelsPhoto, Photo } from '../types/photo';

const API_KEY = import.meta.env.VITE_PEXELS_KEY;

axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = { orientation: 'landscape' };

export const getPhotos = async (query: string): Promise<Photo[]> => {
  const { data } = await axios.get('search', { params: { query } });
  return data.photos.map((p: PexelsPhoto) => ({
    id: p.id,
    avg_color: p.avg_color,
    alt: p.alt,
    src: { large: p.src.large, original: p.src.original },
  }));
};
