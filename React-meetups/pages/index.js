
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
{
    id: 'm1',
    title:'A first meetup',
    image:'https://plus.unsplash.com/premium_photo-1676117273974-8dd08fabc52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60',
    address:'c-320 beta 1 ',
    description:'This is a first meetup'
},
{
    id: 'm2',
    title:'A second meetup',
    image:'https://images.unsplash.com/photo-1431263154979-0982327fccbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60',
    address:'c-321 beta 1 ',
    description:'This is a second meetup'
},
{
    id: 'm3',
    title:'A third meetup',
    image:'https://images.unsplash.com/photo-1576618449357-6c156849f8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60',
    address:'c-322 beta 1 ',
    description:'This is a third meetup'
}
]

const HomePage = (props) => {
  return (
    <div>
        <MeetupList meetups={props.meetups}/>

      
    </div>
  )
}

export async function getStaticProps(){
    return{
        props: {
            meetups:DUMMY_MEETUPS
        }
    }
}
export default HomePage
