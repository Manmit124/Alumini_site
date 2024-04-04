import React from 'react'
import { RxArrowRight } from 'react-icons/rx'
import Link from 'next/link'
import Heading1 from '../Headings/Heading1'
import EventCard from './EventCard'

const Events = () => {
    // const { data, isLoading, isError } = useQuery({
    //     queryKey: ["events"],
    //     queryFn: () => getDocuments("events"),
    //     staleTime: Infinity,
    // });
    const data = [
        {
          img: "/Home/Event/Event1.jpeg",
          title: "Event Title 1",
          organizer: "Event Organizer 1",
          date: "Event Date 1",
          venue: "Event Venue 1"
        },
        {
          img: "/Home/Event/Event2.jpeg",
          title: "Event Title 2",
          organizer: "Event Organizer 2",
          date: "Event Date 2",
          venue: "Event Venue 2"
        },
        {
          img: "/Home/Event/Event3.jpeg",
          title: "Event Title 2",
          organizer: "Event Organizer 2",
          date: "Event Date 2",
          venue: "Event Venue 2"
        },
        // Add more data objects as needed
      ];

    return (
        <div className="my-10 mb-36 lg:px-16 md:px-6 px-6">
            <Heading1 details={"We host a variety of events throughout the year to engage and connect with our esteemed alumni, providing platforms for networking, professional development, and fostering a sense of continued community among our graduates."} text1={"Eventful Life at"} text2={"GCOEC Chandrapur"} />


            {/* {isLoading ? <h1>..Loading</h1> : */}

                    <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center m-auto my-10 min-h-[16rem]'>
                        { data.map((event,index) => (
                            <div key={index}>

                            <EventCard data={event} key={event.$id} />
                            </div>
                        ))
                    }
                    </div>

            <Link data-aos="zoom-in" href="/events" className='bg-sky-400 absolute lg:right-20 md:right-16 right-12 hover:bg-sky-500 text-white font-semi-bold py-2 px-4 rounded-full flex items-center'>
                <button className="mr-2">
                    View All
                </button>
                <RxArrowRight size={24} />
            </Link>
        </div>
    )
}

export default Events