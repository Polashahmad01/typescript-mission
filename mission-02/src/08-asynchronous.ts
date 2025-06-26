{
  // Asynchronous

  type DataType = {
    success: boolean;
    statusCode: number;
    data: string;
  }

  const createPromose = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
      const data: DataType = { success: true, statusCode: 200, data: 'Some data...' };
      // const data: string = null;

      if(data) {
        resolve(data);
      } else {
        reject('Failed to laod data...');
      }
    });
  }

  const fetchPromiseData = async (): Promise<DataType> => {
    const data: DataType = await createPromose();
    // console.log(data);
    return data;
  }

  fetchPromiseData();

  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const fetchData = async (): Promise<Todo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
    return data;
  }

  fetchData();
  //
}