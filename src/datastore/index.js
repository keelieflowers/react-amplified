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

// export async function getPosts() {
//   try {
//     const posts = await DataStore.query(Post);
//     console.log(
//       'Posts retrieved successfully!',
//       JSON.stringify(posts, null, 2)
//     );
//   } catch (error) {
//     console.log('Error retrieving posts', error);
//   }
// }
