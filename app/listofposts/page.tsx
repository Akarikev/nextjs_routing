import { get } from "http";
import Image from "next/image";
import { cache } from "react";

// const getPostData = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
//   return res.json();
// };

// const getUserData = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
//   return res.json();
// };

const getDogData = async () => {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`, {
    cache: "no-store",
  });
  return res.json();
};

// const getPokemonData = async () => {
//   const res = await fetch(`https://pokeapi.co/api/v2/berry/{name}`);

//   return res.json();
// };

export default async function ListofPost() {
  const [dog] = await Promise.all([getDogData()]);

  // const dog = await getDogData();

  // const pokemon = await getPokemonData();

  return (
    <div>
      <div>
        <div>
          <Image src={dog.message} alt="dog image" width={500} height={500} />
        </div>

        {/* <div>
          {pokemon.map((pokename: any, id: any) => (
            <div key={id}>{pokename.name}</div>
          ))}
        </div> */}

        {/* 
        {posts.map((post: any, id: any) => (
          <p key={id}>{post.title}</p>
        ))}

        <div>
          {users.map((user: any, id: any) => (
            <p key={id}>{user.name}</p>
          ))}
        </div> */}
      </div>
    </div>
  );
}
