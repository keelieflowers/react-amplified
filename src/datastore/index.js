import { DataStore } from '@aws-amplify/datastore';

export async function postToDataStore(post) {
  try {
    const postResult = await DataStore.save(
      post
      //   new Post({
      //     title: 'My First Post',
      //   })
    );
    console.log('Post saved successfully!', postResult);
  } catch (error) {
    console.log('Error saving post', error);
  }
}
