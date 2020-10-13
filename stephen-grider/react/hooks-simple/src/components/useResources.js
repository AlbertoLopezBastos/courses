
import { useState, useEffect } from 'react';
import JsonPlaceholder from '../apis/JsonPlaceholder';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await JsonPlaceholder.get(`/${resource}`);

    setResources(response.data);
  }

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
}

export default useResources;