//Problem 6

interface Profile {
    name?: string;
    age?: number;
    email?: string;
}

const updateProfile = (profile: Profile, updatedValue : Profile )  =>{
    if(updatedValue?.age){
        profile.age = updatedValue.age;
    }
    if(updatedValue?.name){
        profile.name = updatedValue.name;
    }
    if(updatedValue?.email){
        profile.email = updatedValue.email;
    }
    return profile;
}


const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, {name: 'Sujon', email: 'sujon@sujon.com'}));