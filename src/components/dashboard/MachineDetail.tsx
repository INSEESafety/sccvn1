import { useState } from 'react';
import axios from 'axios';
import { columns } from './machinecolumns';
import { DataTable } from '@/components/ui/data-table';
import Loader from '@/components/shared/Loader';
import ModalImage from '@/uti/ModalImage';
import ModalMap from '@/uti/ModalMap';
import ModalForm from '@/uti/ModalForm';
import { getStorage, ref, deleteObject } from 'firebase/storage';
import { http } from '@/lib/http';
import {
  MachineItem,
  MapItem,
  MachineProps,
  dailyEquipment,
} from '@/lib/typeMachine';

type Item = {
  id: string | undefined;
  machine: string | undefined;
};

// Utility function to delete a key from an object
const deleteKey = <T, K extends keyof T>(obj: T, key: K): void => {
  delete obj[key];
};

const Detail = ({ dataTr, item }: MachineProps) => {
  const [formVisible, setFormVisible] = useState(false);
  const [formVisibleMap, setFormVisibleMap] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null | undefined>(
    null
  );

  const [selectedItem, setSelectedItem] = useState<MapItem>({
    lat: 0,
    lng: 0,
    id: '',
    inspector: '',
    date: '',
  });
  const [selectedForm, setSelectedForm] = useState<Item>({
    id: '',
    machine: '',
  });
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleShowImage = (url?: string | undefined) => {
    setSelectedImg(url);
  };

  const handleShowMap = (
    lat: number | undefined,
    lng: number | undefined,
    id: string,
    inspector: string,
    date: string | number
  ) => {
    if (lat !== undefined && lng !== undefined) {
      setSelectedItem({
        lat,
        lng,
        id,
        inspector,
        date,
      });
      setFormVisibleMap(true);
    } else {
      console.log(lat);
    }
  };

  const handleShowForm = (
    id: string | undefined,
    machine: string | undefined
  ) => {
    if (id !== undefined && machine !== undefined) {
      setSelectedForm({
        id,
        machine,
      });
      setFormVisible(true);
    } else {
      console.log(id);
    }
  };

  const storage = getStorage();

  const handleDeleteClick = async (id: string, inspection: MachineItem) => {
    try {
      // Loop through the inspection and delete fields ending with 'P' and handle URLs
      (Object.keys(inspection) as (keyof MachineItem)[]).forEach(
        async (key) => {
          if (
            (key.endsWith('P') || key.endsWith('F') || key.startsWith('url')) &&
            typeof inspection[key] === 'string' &&
            (inspection[key] as string).startsWith('http')
          ) {
            const url = inspection[key] as string;
            const desertRef = ref(storage, url);

            try {
              await deleteObject(desertRef);
              console.log('File deleted successfully');
            } catch (error) {
              console.log(error);
            }

            deleteKey(inspection, key); // Delete the field from the inspection
          }
        }
      );

      const res = await axios.delete(
        `${http}${item.toLowerCase()}Tr_delete?id=${id}`,
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      );

      if (res.status === 200) {
        window.location.reload();
      } else {
        throw new Error('Failed to delete');
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const calculateDefectPercentage = (inspection: MachineItem): number => {
    let total = 0;
    let notPass = 0;

    Object.values(inspection).forEach((value) => {
      if (value === 'NotPass') {
        notPass += 1;
      }
      if (value === 'Pass' || value === 'NotPass') {
        total += 1;
      }
    });

    const defectPercentage = total > 0 ? (notPass / total) * 100 : 0;

    return defectPercentage;
  };

  if (!dataTr || dataTr.length === 0) {
    return <Loader />;
  }

  return (
    <section className="pb-8 scroll-auto">
      <div className="flex gap-4 pt-4 items-center px-4 md:justify-center">
        <div className="flex flex-col gap-4 pt-4 items-center animate-pulse">
          <img
            src={`/assets/icons/${item.toLowerCase()}.svg`}
            alt="Image"
            width={
              item.toLowerCase() === 'mobile' ||
              item.toLowerCase() === 'vehicle'
                ? 250
                : 100
            }
            height={
              item.toLowerCase() === 'mobile' ||
              item.toLowerCase() === 'vehicle'
                ? 250
                : 100
            }
          />
        </div>
      </div>
      <div>
        {dataTr && (
          <DataTable
            columns={columns(
              handleDeleteClick,
              handleShowImage,
              handleShowMap,
              calculateDefectPercentage,
              toggleExpanded,
              expanded,
              item,
              handleShowForm
            )}
            data={dataTr.sort((a, b) => {
              // Initialize with the earliest possible date if no transactions exist
              let lastTransDateA =
                a.trans.length > 0 ? new Date(a.trans[0].date).getTime() : 0;
              let lastTransDateB =
                b.trans.length > 0 ? new Date(b.trans[0].date).getTime() : 0;

              // Find the most recent `trans.date` timestamp for each item
              a.trans.forEach((trans) => {
                const transDate = new Date(trans.date).getTime();
                if (transDate > lastTransDateA) {
                  lastTransDateA = transDate;
                }
              });
              b.trans.forEach((trans) => {
                const transDate = new Date(trans.date).getTime();
                if (transDate > lastTransDateB) {
                  lastTransDateB = transDate;
                }
              });

              // Check if the machine is in the dailyEquipment list
              const isDailyEquipment = dailyEquipment.some(
                (eq) => eq.id.toLowerCase() === item.toLowerCase()
              );

              // Sort descending if machine is in dailyEquipment, otherwise sort ascending
              return isDailyEquipment
                ? lastTransDateB - lastTransDateA
                : lastTransDateA - lastTransDateB;
            })}
          />
        )}
      </div>
      {formVisibleMap &&
        selectedItem.lat !== undefined &&
        selectedItem.lng !== undefined && (
          <ModalMap
            lat={selectedItem.lat}
            lng={selectedItem.lng}
            id={selectedItem.id}
            inspector={selectedItem.inspector}
            date={selectedItem.date}
            setFormVisibleMap={setFormVisibleMap}
          />
        )}
      {selectedImg && (
        <ModalImage selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      {formVisible && selectedForm.id !== undefined && (
        <ModalForm
          bu={'vn'}
          id={selectedForm.id}
          machine={selectedForm.machine}
          setFormVisible={setFormVisible}
        />
      )}
    </section>
  );
};

export default Detail;
