import { useState } from 'react';
import { Form } from '../Form/Form';
import { PhotosGallery } from '../PhotosGallery/PhotosGallery';
import { Modal } from '../Modal/Modal';
import { Loader } from '../Loader/Loader';
import { getPhotos } from '../../services/photos';
import type { Photo } from '../../types/photo';

const App = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const data = await getPhotos(query);
      setPhotos(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {isError && <p>Error fetching photos</p>}
      <PhotosGallery photos={photos} onSelectPhoto={setSelectedPhoto} />
      {selectedPhoto && (
        <Modal onClose={() => setSelectedPhoto(null)}>
          <img src={selectedPhoto.src.original} alt={selectedPhoto.alt} />
        </Modal>
      )}
    </div>
  );
};

export default App;
