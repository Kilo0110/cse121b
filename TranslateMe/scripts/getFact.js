const getFact = async () => {
  try {
    const res = await fetch('https://dog-api.kinduff.com/api/facts');

    if (res) {
      return await res.json();
    } else {
      console.log('An error occurred');
    }
  } catch (error) {
    console.log(error);
  }
};

export default getFact;
