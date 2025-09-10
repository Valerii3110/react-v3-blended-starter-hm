import style from './PhotosGalleryItem.module.css';
import type { Photo } from '../../types/photo';

interface PhotosGalleryItemProps {
  photo: Photo;
  onSelect: (photo: Photo) => void;
}

export const PhotosGalleryItem = ({
  photo,
  onSelect,
}: PhotosGalleryItemProps) => {
  return (
    <div
      className={style.thumb}
      style={{ backgroundColor: photo.avg_color, borderColor: photo.avg_color }}
      onClick={() => onSelect(photo)}
    >
      <img src={photo.src.large} alt={photo.alt} />
    </div>
  );
};
