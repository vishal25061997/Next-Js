// our-domain/meetupid
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    
      <MeetupDetail
        image="https://plus.unsplash.com/premium_photo-1676117273974-8dd08fabc52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"
        title="first meetup"
        address="c-320 beta 1"
        description="This ius first meetup"
      />
    
  );
};
export async function getStaticPaths(){
 return {
    fallback:false,
    paths:[
        { params:{
            meetupId:'m1',
        },
        },
         { 
            params:{
            meetupId:'m2',
        },
        },
    ]
 }
}

export async function getStaticProps(context){

    // fetch data for single page
    const meetupId = context.params.meetupId
    console.log(meetupId)
    return {
        props:{
           meetupData:{
            image:'https://plus.unsplash.com/premium_photo-1676117273974-8dd08fabc52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60',
            id:meetupId,
            title:"first meetup",
            address:"c-320 beta 1",
        description:"This ius first meetup"
           }
        }
    }
}

export default MeetupDetails;
