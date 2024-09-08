import React, { useState } from 'react';
import { BiTimeFive } from "react-icons/bi";
import logo1 from "../../assets/logo (1).png";
import logo2 from "../../assets/logo (2).png";
import logo3 from "../../assets/logo (3).jpg";
import logo4 from "../../assets/logo (4).png";

const Data = [
    {
        id: 1,
        image: logo1,
        title: 'Web Developer',
        time: 'Now',
        location: 'Delhi',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, ipsum.',
        company: 'Huawei',
    },
    {
        id: 2,
        image: logo2,
        title: 'Software Eng',
        time: '2Hrs',
        location: 'Hyderabad',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, ipsum.',
        company: 'Line',
    },
    {
        id: 3,
        image: logo3,
        title: 'UI Designer',
        time: '10Hrs',
        location: 'Delhi',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, ipsum.',
        company: 'Adobe',
    },
    {
        id: 4,
        image: logo4,
        title: 'Web Developer',
        time: '8Hrs',
        location: 'Jaipur',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, ipsum.',
        company: 'PayPal',
    },
    {
        id: 5,
        image: logo1,
        title: 'Data Scientist',
        time: '1Day',
        location: 'Bangalore',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quos?',
        company: 'Google',
    },
    {
        id: 6,
        image: logo2,
        title: 'Product Manager',
        time: '3Hrs',
        location: 'Pune',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quos?',
        company: 'Amazon',
    },
    {
        id: 7,
        image: logo3,
        title: 'Digital Marketer',
        time: '12Hrs',
        location: 'Delhi', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quos?',
        company: 'Facebook',
    },
    {
        id: 8,
        image: logo4,
        title: 'Backend Developer',
        time: '5Hrs',
        location: 'Mumbai',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quos?',
        company: 'Microsoft',
    },
    {
        id: 9,
        image: logo1,
        title: 'Front-End Developer',
        time: 'Now',
        location: 'Kolkata',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quos?',
        company: 'Apple',
    },
    {
        id: 10,
        image: logo2,
        title: 'Full Stack Developer',
        time: '4Hrs',
        location: 'Delhi', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quos?',
        company: 'Netflix',
    },
    {
        id: 11,
        image: logo3,
        title: 'UI/UX Designer',
        time: '2Days',
        location: 'Noida',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quos?',
        company: 'Salesforce',
    },
    {
        id: 12,
        image: logo4,
        title: 'Mobile Developer',
        time: '6Hrs',
        location: 'Gurgaon',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quos?',
        company: 'Oracle',
    },
    {
        id: 13,
        image: logo1,
        title: 'Web Developer',
        time: '2Days',
        location: 'Mumbai', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quos?',
        company: 'Huawei', 
    },
    {
        id: 14,
        image: logo2,
        title: 'Software Engineer',
        time: '5Hrs',
        location: 'Mumbai', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quos?',
        company: 'Line', 
    }
];


const Jobs = ({ jobTitle, company, location }) => {
    // Filter jobs based on search criteria
    const filteredJobs = Data.filter(job =>
        (!jobTitle || job.title.toLowerCase().includes(jobTitle.toLowerCase())) &&
        (!company || job.company.toLowerCase().includes(company.toLowerCase())) &&
        (!location || job.location.toLowerCase().includes(location.toLowerCase()))
    );

    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map(({ id, image, title, time, location, desc, company }) => (
                        <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-purpleColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                            <span className='flex justify-between items-center gap-4'>
                                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                                <span className='flex items-center text-[#ccc] gap-1'>
                                    <BiTimeFive />{time}
                                </span>
                            </span>
                            <h6 className='text-[#ccc]'>{location}</h6>
                            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                                {desc}
                            </p>
                            <div className='company flex items-center gap-2'>
                                <img src={image} alt="Company Logo" className='w-[10%]' />
                                <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                            </div>
                            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                                Apply Now
                            </button>
                        </div>
                    ))
                ) : (
                    <p className='text-center text-gray-500'>No relevant jobs found.</p>
                )}
            </div>
        </div>
    );
};

export default Jobs;