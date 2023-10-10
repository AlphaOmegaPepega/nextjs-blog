'use client'

import Chart from 'chart.js/auto'
import React, { useEffect,useState,useRef} from 'react'
import { useSession } from "next-auth/react"
import getPersonal from '@/lib/getQuestions'
import getAllUsers from '@/lib/getAllUsers'
import { titles1, titles2, titles3, titles4, titles5, titles6, titles7} from '@/lib/titles'
import getDelivery from '@/lib/getDelivery'
import getDesign from '@/lib/getDesgin'
import getDiscovery from '@/lib/getDiscovery'
import getKnowleadge from '@/lib/getIndustryKnowleadge'
import getStackholder from '@/lib/getStackholder'
import getVision from '@/lib/getVision'
import createChart from '@/lib/createChart'
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios'
export default function Skill() {
  let id = 0;
  const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    overflow:'scroll',
    height:'50%',
    p: 4,
    
  };

  const [open, setOpen] = useState(false);
  const [PersonalNotes, setPersonalNotes] = useState(['notes']);
  const [DiscoveryNotes, setDiscoveryNotes] = useState(['notes']);
  const [DesignNotes, setDesignNotes] = useState(['notes']);
  const [DeliveryNotes, setDeliveryNotes] = useState(['notes']);
  const [StackholderNotes, setStackholderNotes] = useState(['notes']);
  const [VisionNotes, setVisionNotes] = useState(['notes']);
  const [IndustryKnwlgNotes, setIndustryKnwlgNotes] = useState(['notes']);
  const [notes, setNotes] = useState(['']);

  const handleClose = () => setOpen(false);
  const [page, SetPage] = useState(true);
  const { data: session, status } = useSession();
  let dataWorking;
  let deliv;
  let design;
  let discover;
  let industry;
  let stack;
  let vision;
  let chartData1;
  let chartData2;
  let chartData3;
  let chartData4;
  let chartData5;
  let chartData6;
  let chartData7;

  useEffect(() => {
    if (status == 'authenticated') {
      const setNote = async () => {
        const user = await getAllUsers(session.user.email);
        const notes = await axios.get(
          `https://produktize-api.onrender.com/notes/${user._id}`
        );
        console.log(notes.data);
        setPersonalNotes(notes.data.PersonalNotes);
        setDeliveryNotes(notes.data.DeliveryNotes);
        setDesignNotes(notes.data.DesignNotes);
        setDiscoveryNotes(notes.data.DiscoveryNotes);
        setIndustryKnwlgNotes(notes.data.IndustryKnwlgNotes);
        setVisionNotes(notes.data.VisionNotes);
        setStackholderNotes(notes.data.StackholderNotes);
      };
      setNote();
      destroyChart("acquisitions");
      destroyChart("acquisitions2");
      destroyChart("acquisitions3");
      destroyChart("acquisitions4");
      destroyChart("acquisitions5");
      destroyChart("acquisitions6");
      destroyChart("acquisitions7");

      const creatGraph = async () => {
        try {
          const user = await getAllUsers(session.user.email);
          const data = await getPersonal(user._id);
          const delivData = await getDelivery(user._id);
          const designData = await getDesign(user._id);
          const discoverData = await getDiscovery(user._id);
          const industryData = await getKnowleadge(user._id);
          const StackhData = await getStackholder(user._id);
          const VisionData = await getVision(user._id);

          dataWorking = await data[data.length - 1];
          deliv = await delivData[delivData.length - 1];
          design = await designData[designData.length - 1];
          discover = await discoverData[discoverData.length - 1];
          industry = await industryData[industryData.length - 1];
          stack = await StackhData[StackhData.length - 1];
          vision = await VisionData[VisionData.length - 1];
          const promises = [
            ...Object.values(dataWorking),
            ...Object.values(deliv),
            ...Object.values(design),
            ...Object.values(discover),
            ...Object.values(industry),
            ...Object.values(stack),
            ...Object.values(vision),
          ];

          const results = await Promise.all(promises);

          results.forEach((data) => {
            if (data === '') {
              SetPage(false);
            }
          });
        } catch (error) {
          console.log(error);
          SetPage(false);
        }

        if (dataWorking) {
          chartData1 = [
            dataWorking.Collaboration,
            dataWorking.Communication,
            dataWorking.Quality,
            dataWorking.DecisionMaking,
            dataWorking.Learning,
            dataWorking.Organisational,
            dataWorking.Bias,
          ];
        }
        if (discover) {
          chartData2 = [
            discover.UserResearch,
            discover.Design,
            discover.Market,
            discover.Synthesising,
          ];
        }
        if (design) {
          chartData3 = [
            design.Product,
            design.Visual,
            design.UXDesign,
            design.UXTesting,
          ];
        }
        if (deliv) {
          chartData4 = [
            deliv.Business,
            deliv.Product,
            deliv.Technology,
            deliv.Agile,
          ];
        }
        if (stack) {
          chartData5 = [stack.Engagement, stack.Leadership, stack.Management];
        }
        if (vision) {
          chartData6 = [vision.Vision, vision.Strategy, vision.RoadMapping];
        }
        if (industry) {
          chartData7 = [industry.General, industry.Specific];
        }

        if (page) {
          createChart('bar', titles1, chartData1, '#49BBFF99', 'acquisitions', 'y');
          createChart('bar', titles2, chartData2, '#FF508C99', 'acquisitions2', 'y');
          createChart('bar', titles3, chartData3, '#6500D399', 'acquisitions3', 'y');
          createChart('bar', titles4, chartData4, '#F4D80199', 'acquisitions4', 'y');
          createChart('bar', titles5, chartData5, '#00268B99', 'acquisitions5', 'y');
          createChart('bar', titles6, chartData6, '#FFD79A99', 'acquisitions6', 'y');
          createChart('bar', titles7, chartData7, '#E7DCF899', 'acquisitions7', 'y');
        }
      };

      creatGraph();
    }
  }, [status, page]);

  const handlePersonal = () => {
    setNotes(PersonalNotes);
    setOpen(true);
  };
  const handleDiscovery = () => {
    setNotes(DiscoveryNotes);
    setOpen(true);
  };

  const destroyChart = (chartId) => {
    const chart = Chart.getChart(chartId);
    if (chart) {
      chart.destroy();
    }
  };

  return (
    <main className='px-1'>
      {page && (
        <div className='w-full'>
          <h1>Your skill</h1>
        
          <section className='bg-white'>
            <section className='h-145'>
              <section className='text-center relative top-10 py-4 text-3xl bg-white'>
                <h1 className='bg-white'>
                  PERSONAL TRAITS <AddchartOutlinedIcon onClick={handlePersonal} />
                </h1>
              </section>
              <section className='text-center  text-3xl   bg-white h-145 pl-1.5 pb-14'>
                <canvas className='relative bg-white top-10  ' id='acquisitions'></canvas>
              </section>

              <section className='text-center relative  text-3xl bg-white'>
                <h1>DISCOVERY AND IDEATION <AddchartOutlinedIcon onClick={handleDiscovery} /></h1>
              </section>
              <section className='text-center  text-3xl bg-white h-96 pl-15 pb-14'>
                <canvas className='relative bg-white top-10 ' id='acquisitions2'></canvas>
              </section>

              <section className='text-center relative text-3xl bg-white z-50'>
                <h1 className>DESIGN</h1>
              </section>
              <section className='relative text-3xl   bg-white h-96 pl-11 pb-14'>
                <canvas className='relative top-10' id='acquisitions3'></canvas>
              </section>

              <section className='text-center relative text-3xl bg-white'>
                <h1>DELIVERY</h1>
              </section>
              <section className='text-3xl   bg-white h-96 pb-14'>
                <canvas className='relative bg-white top-10 ' id='acquisitions4'></canvas>
              </section>

              <section className='text-center relative text-3xl bg-white'>
                <h1>STAKEHOLDER MANAGEMENT</h1>
              </section>
              <section className='text-center  text-3xl   bg-white h-80 pb-14 pl-6.5'>
                <canvas className='relative bg-white top-10 ' id='acquisitions5'></canvas>
              </section>

              <section className='text-center relative text-3xl bg-white'>
                <h1>VISION AND STRATEGY</h1>
              </section>
              <section className='text-center  text-3xl   bg-white h-80 pb-14 pl-21'>
                <canvas className='relative bg-white top-10  ' id='acquisitions6'></canvas>
              </section>

              <section className='text-center relative text-3xl bg-white'>
                <h1>BUSINESS INDUSTRY KNOWLEDGEY</h1>
              </section>
              <section className='text-center  text-3xl  bg-white h-64 pb-18 pl-2.5'>
                <canvas className='relative bg-white top-10 ' id='acquisitions7'></canvas>
              </section>
            </section>
          </section>
        </div>
      )}

      {!page && (
        <div>
          <h1 className='text-white text-7xl text-center top-60 relative'>You have not finished survey yet</h1>
          <br />
        </div>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        className='opacity-90'
      >
        <Box className='text-2xl' sx={style}>
          {notes.map((note) => {
            id++;
            return (
              <pre className='my-5' key={id}>
                {id}{') '}
                {note}
              </pre>
            );
          })}
    
        </Box>
      </Modal>
    </main>
  );
}
