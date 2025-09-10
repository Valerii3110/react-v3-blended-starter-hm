import { Grid, GridItem } from '../Grid/Grid';
import type { Photo } from '../../types/photo';
import { PhotosGalleryItem } from '../PhotosGalleryItem/PhotosGalleryItem';

interface PhotosGalleryProps {
  photos: Photo[];
  onSelectPhoto: (photo: Photo) => void;
}

export const PhotosGallery = ({
  photos,
  onSelectPhoto,
}: PhotosGalleryProps) => {
  if (!photos.length) return null;

  return (
    <Grid>
      {photos.map((photo) => (
        <GridItem key={photo.id}>
          <PhotosGalleryItem photo={photo} onSelect={onSelectPhoto} />
        </GridItem>
      ))}
    </Grid>
  );
};
