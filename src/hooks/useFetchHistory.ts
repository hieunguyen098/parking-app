import {useEffect, useState} from 'react';
import {getHistories} from "../services/history.api";

export function useFetchHistory(type: string, phone: string): [boolean, any[], (...arg: any[]) => Promise<void>, (...arg: any[]) => Promise<void>] {
  const [loading, setLoading] = useState(false);
  const [histories, setHistories] = useState<any[]>([]);
  const [prevId, setPrevId] = useState("")
  const [lastLoadSize, setLastLoadSize] = useState(0)
  const firstLoadHistory = async () => {
    setLoading(true);
    const data = await getHistories(phone, type, "");
    setLastLoadSize(data.data? data.data.length: 0)
    setHistories(data.data ? data.data : []);
    setLoading(false);
  };

  const loadOldHistory = async () => {
    console.log(lastLoadSize)
    if (lastLoadSize > 0) {
      setLoading(true);
      const data = await getHistories(phone, type, prevId);
      await setLastLoadSize(data.data ? data.data.length : 0)
      const newData = data.data ? data.data : [];
      if (newData.length > 0) setHistories([...histories, ...newData]);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (histories && histories.length > 0) {
      const newPrevId = histories[histories.length - 1].historyId
      if (newPrevId != "") setPrevId(newPrevId)
    }
  }, [histories])

  return [loading, histories, firstLoadHistory, loadOldHistory];
}
