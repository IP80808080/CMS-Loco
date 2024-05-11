import { useState, useEffect } from "react";
import axios from "axios";
import Details from "../TemplateTAO/details";
import Table from "../TemplateTAO/table";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./TAO-659.css";
import { getUsername } from "../../../../helper/helper";
import { BASE_URL } from "../../../../config";

function RevertHistoryInputFieldTAO() {
  const [uid, setUID] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [stator_no, setStator_no] = useState("");
  const [armature_no, setArmature_no] = useState("");
  const [bhrr_no, setBhrr_no] = useState("");
  const [kmo_no, setKmo_no] = useState("");
  const [kmo_make, setKmo_make] = useState("");
  const [karmachari_name, setKarmachari_name] = useState("");
  const [engine_no, setEngine_no] = useState("");
  const [nikalne_date, setNikalne_date] = useState("");
  const [kmv_no, setKmv_no] = useState("");
  const [nikalne_reason, setNikalne_reason] = useState("");
  const [manak_01_1, setManak_01_1] = useState("");
  const [vastavik1, setVastavik1] = useState("");
  const [vastavik2, setVastavik2] = useState("");
  const [vastavik3_mm, setVastavik3_mm] = useState("");
  const [vastavik3_microm1, setVastavik3_microm1] = useState("");
  const [vastavik3_microm2, setVastavik3_microm2] = useState("");
  const [vastavik4, setVastavik4] = useState("");
  const [vastavik5, setVastavik5] = useState("");
  const [vastavik6, setVastavik6] = useState("");
  const [vastavik7_make1, setVastavik7_make1] = useState("");
  const [vastavik7_no1, setVastavik7_no1] = useState("");
  const [vastavik7_year1, setVastavik7_year1] = useState("");
  const [vastavik7_clearance1, setVastavik7_clearance1] = useState("");
  const [vastavik7_make2, setVastavik7_make2] = useState("");
  const [vastavik7_no2, setVastavik7_no2] = useState("");
  const [vastavik7_year2, setVastavik7_year2] = useState("");
  const [vastavik7_clearance2, setVastavik7_clearance2] = useState("");
  const [overhall_01name, setOverhall_01name] = useState("");
  const [date_01_1, setDate_01_1] = useState("");
  const [overhall_02name, setOverhall_02name] = useState("");
  const [vastavik01, setVastavik01] = useState("");
  const [vastavik02, setVastavik02] = useState("");
  const [vastavik03, setVastavik03] = useState("");
  const [vastavik04, setVastavik04] = useState("");
  const [vastavik05, setVastavik05] = useState("");
  const [vastavik06, setVastavik06] = useState("");
  const [vastavik07, setVastavik07] = useState("");
  const [vastavik08, setVastavik08] = useState("");
  const [vastavik09, setVastavik09] = useState("");
  const [vastavik_1a, setVastavik_1a] = useState("");
  const [vastavik_1b, setVastavik_1b] = useState("");
  const [vastavik_1c, setVastavik_1c] = useState("");
  const [vastavik_2mp1, setVastavik_2mp1] = useState("");
  const [vastavik_2ip1, setVastavik_2ip1] = useState("");
  const [vastavik_2mainlead1, setVastavik_2mainlead1] = useState("");
  const [vastavik_3mp2, setVastavik_3mp2] = useState("");
  const [vastavik_3ip2, setVastavik_3ip2] = useState("");
  const [vastavik_3mainlead2, setVastavik_3mainlead2] = useState("");
  const [vastavik_4, setVastavik_4] = useState("");
  const [vastavik_5, setVastavik_5] = useState("");
  const [overhall_1name, setOverhall_1name] = useState("");
  const [date_1, setDate_1] = useState("");
  const [overhall_2name, setOverhall_2name] = useState("");
  const [date_2, setDate_2] = useState("");
  const [vastvik_1, setVastvik_1] = useState("");
  const [vastvik_2, setVastvik_2] = useState("");
  const [vastvik_3, setVastvik_3] = useState("");
  const [vastvik_4, setVastvik_4] = useState("");
  const [vastvik_5, setVastvik_5] = useState("");
  const [vastvik_6, setVastvik_6] = useState("");
  const [vastvik_7, setVastvik_7] = useState("");
  const [vastvik_8, setVastvik_8] = useState("");
  const [vastvik_9, setVastvik_9] = useState("");
  const [vastvik_10, setVastvik_10] = useState("");
  const [vastvik_11, setVastvik_11] = useState("");
  const [vastvik_11a, setVastvik_11a] = useState("");
  const [vastvik_11b, setVastvik_11b] = useState("");
  const [vastvik_11c, setVastvik_11c] = useState("");
  const [vastvik_11d, setVastvik_11d] = useState("");
  const [vastvik_11e, setVastvik_11e] = useState("");
  const [vastvik_12, setVastvik_12] = useState("");
  const [vastvik_13, setVastvik_13] = useState("");
  const [vastvik_14, setVastvik_14] = useState("");
  const [vastvik_15, setVastvik_15] = useState("");
  const [vastvik_16, setVastvik_16] = useState("");
  const [vastvik_17, setVastvik_17] = useState("");
  const [manak_18make01, setManak_18make01] = useState("");
  const [manak_18no01, setManak_18no01] = useState("");
  const [manak_18year01, setManak_18year01] = useState("");
  const [manak_18make02, setManak_18make02] = useState("");
  const [manak_18no02, setManak_18no02] = useState("");
  const [manak_18year02, setManak_18year02] = useState("");
  const [vastvik_18, setVastvik_18] = useState("");
  const [vastvik_19a, setVastvik_19a] = useState("");
  const [vastvik_19b, setVastvik_19b] = useState("");
  const [vastvik_20, setVastvik_20] = useState("");
  const [vastvik_21a, setVastvik_21a] = useState("");
  const [bhrr1_no, setBhrr1_no] = useState("");
  const [overhall1_name, setOverhall1_name] = useState("");
  const [certified_name, setCertified_name] = useState("");
  const [vastvik_01, setVastvik_01] = useState("");
  const [vastvik_02, setVastvik_02] = useState("");
  const [vastvik_03, setVastvik_03] = useState("");
  const [vastvik_04, setVastvik_04] = useState("");
  const [vastvik_05, setVastvik_05] = useState("");
  const [vastvik_06, setVastvik_06] = useState("");
  const [brush1_no, setBrush1_no] = useState("");
  const [brush2_no, setBrush2_no] = useState("");
  const [brush3_no, setBrush3_no] = useState("");
  const [brush4_no, setBrush4_no] = useState("");
  const [brush5_no, setBrush5_no] = useState("");
  const [brush6_no, setBrush6_no] = useState("");
  const [brush1_grade, setBrush1_grade] = useState("");
  const [brush2_grade, setBrush2_grade] = useState("");
  const [brush3_grade, setBrush3_grade] = useState("");
  const [brush4_grade, setBrush4_grade] = useState("");
  const [brush5_grade, setBrush5_grade] = useState("");
  const [brush6_grade, setBrush6_grade] = useState("");
  const [brush1_gap, setBrush1_gap] = useState("");
  const [brush2_gap, setBrush2_gap] = useState("");
  const [brush3_gap, setBrush3_gap] = useState("");
  const [brush4_gap, setBrush4_gap] = useState("");
  const [brush5_gap, setBrush5_gap] = useState("");
  const [brush6_gap, setBrush6_gap] = useState("");
  const [brush1_razorgap, setBrush1_razorgap] = useState("");
  const [brush2_razorgap, setBrush2_razorgap] = useState("");
  const [brush3_razorgap, setBrush3_razorgap] = useState("");
  const [brush4_razorgap, setBrush4_razorgap] = useState("");
  const [brush5_razorgap, setBrush5_razorgap] = useState("");
  const [brush6_razorgap, setBrush6_razorgap] = useState("");
  const [brush1_tension_r, setBrush1_tension_r] = useState("");
  const [brush2_tension_r, setBrush2_tension_r] = useState("");
  const [brush3_tension_r, setBrush3_tension_r] = useState("");
  const [brush4_tension_r, setBrush4_tension_r] = useState("");
  const [brush5_tension_r, setBrush5_tension_r] = useState("");
  const [brush6_tension_r, setBrush6_tension_r] = useState("");
  const [brush1_tension_m, setBrush1_tension_m] = useState("");
  const [brush2_tension_m, setBrush2_tension_m] = useState("");
  const [brush3_tension_m, setBrush3_tension_m] = useState("");
  const [brush4_tension_m, setBrush4_tension_m] = useState("");
  const [brush5_tension_m, setBrush5_tension_m] = useState("");
  const [brush6_tension_m, setBrush6_tension_m] = useState("");
  const [brush1_tension_v, setBrush1_tension_v] = useState("");
  const [brush2_tension_v, setBrush2_tension_v] = useState("");
  const [brush3_tension_v, setBrush3_tension_v] = useState("");
  const [brush4_tension_v, setBrush4_tension_v] = useState("");
  const [brush5_tension_v, setBrush5_tension_v] = useState("");
  const [brush6_tension_v, setBrush6_tension_v] = useState("");
  const [stator1_no, setStator1_no] = useState("");
  const [date1, setDate1] = useState("");
  const [armature_no1, setArmature_no1] = useState("");
  const [bhrr_no1, setBhrr_no1] = useState("");
  const [assembly_name, setAssembly_name] = useState("");
  const [certified_1name, setCertified_1name] = useState("");
  const [vastveek_1, setVastveek_1] = useState("");
  const [vastveek_2a, setVastveek_2a] = useState("");
  const [vastveek_2b, setVastveek_2b] = useState("");
  const [vastveek_2c, setVastveek_2c] = useState("");
  const [vastveek_2d, setVastveek_2d] = useState("");
  const [vastveek_3, setVastveek_3] = useState("");
  const [vastveek_4mm, setVastveek_4mm] = useState("");
  const [vastveek_4mbtb, setVastveek_4mbtb] = useState("");
  const [vastveek_4tir, setVastveek_4tir] = useState("");
  const [vastveek_5pi, setVastveek_5pi] = useState("");
  const [vastveek_5si, setVastveek_5si] = useState("");
  const [pinion_name, setPinion_name] = useState("");
  const [pinion_date, setPinion_date] = useState("");
  const [certified_2name, setCertified_2name] = useState("");
  const [manak_01_2, setManak_01_2] = useState("");
  const [vastveek_01, setVastveek_01] = useState("");
  const [vastveek_02, setVastveek_02] = useState("");
  const [vastveek_03, setVastveek_03] = useState("");
  const [vastveek_04, setVastveek_04] = useState("");
  const [vastveek_05, setVastveek_05] = useState("");
  const [vastveek_06a, setVastveek_06a] = useState("");
  const [vastveek_06b, setVastveek_06b] = useState("");
  const [vastveek_06c, setVastveek_06c] = useState("");
  const [change_01, setChange_01] = useState("");
  const [change_02, setChange_02] = useState("");
  const [change_03, setChange_03] = useState("");
  const [change_04, setChange_04] = useState("");
  const [change_05, setChange_05] = useState("");
  const [change_06, setChange_06] = useState("");
  const [change_07, setChange_07] = useState("");
  const [change_08, setChange_08] = useState("");

  const handlePrint = () => {
    window.print();
  };

  const navigate = useNavigate();
  const [data, setData] = useState({
    uid: "",
    stator_no: "",
    armature_no: "",
    bhrr_no: "",
    kmo_no: "",
    kmo_make: "",
    karmachari_name: "",
    engine_no: "",
    nikalne_date: "",
    kmv_no: "",
    nikalne_reason: "",
    manak_01: "",
    vastavik1: "",
    vastavik2: "",
    vastavik3_mm: "",
    vastavik3_microm1: "",
    vastavik3_microm2: "",
    vastavik4: "",
    vastavik5: "",
    vastavik6: "",
    vastavik7_make1: "",
    vastavik7_no1: "",
    vastavik7_year1: "",
    vastavik7_clearance1: "",
    vastavik7_make2: "",
    vastavik7_no2: "",
    vastavik7_year2: "",
    vastavik7_clearance2: "",
    overhall_01name: "",
    date_01: "",
    overhall_02name: "",
    vastavik01: "",
    vastavik02: "",
    vastavik03: "",
    vastavik04: "",
    vastavik05: "",
    vastavik06: "",
    vastavik07: "",
    vastavik08: "",
    vastavik09: "",
    vastavik_1a: "",
    vastavik_1b: "",
    vastavik_1c: "",
    vastavik_2mp1: "",
    vastavik_2ip1: "",
    vastavik_2mainlead1: "",
    vastavik_3mp2: "",
    vastavik_3ip2: "",
    vastavik_3mainlead2: "",
    vastavik_4: "",
    vastavik_5: "",
    overhall_1name: "",
    date_1: "",
    overhall_2name: "",
    date_2: "",
    vastvik_1: "",
    vastvik_2: "",
    vastvik_3: "",
    vastvik_4: "",
    vastvik_5: "",
    vastvik_6: "",
    vastvik_7: "",
    vastvik_8: "",
    vastvik_9: "",
    vastvik_10: "",
    vastvik_11: "",
    vastvik_11a: "",
    vastvik_11b: "",
    vastvik_11c: "",
    vastvik_11d: "",
    vastvik_11e: "",
    vastvik_12: "",
    vastvik_13: "",
    vastvik_14: "",
    vastvik_15: "",
    vastvik_16: "",
    vastvik_17: "",
    manak_18make01: "",
    manak_18no01: "",
    manak_18year01: "",
    manak_18make02: "",
    manak_18no02: "",
    manak_18year02: "",
    vastvik_18: "",
    vastvik_19a: "",
    vastvik_19b: "",
    vastvik_20: "",
    vastvik_21a: "",
    bhrr1_no: "",

    overhall1_name: "",
    certified_name: "",
    vastvik_01: "",
    vastvik_02: "",
    vastvik_03: "",
    vastvik_04: "",
    vastvik_05: "",
    vastvik_06: "",
    brush1_no: "",
    brush2_no: "",
    brush3_no: "",
    brush4_no: "",
    brush5_no: "",
    brush6_no: "",
    brush1_grade: "",
    brush2_grade: "",
    brush3_grade: "",
    brush4_grade: "",
    brush5_grade: "",
    brush6_grade: "",
    brush1_gap: "",
    brush2_gap: "",
    brush3_gap: "",
    brush4_gap: "",
    brush5_gap: "",
    brush6_gap: "",
    brush1_razorgap: "",
    brush2_razorgap: "",
    brush3_razorgap: "",
    brush4_razorgap: "",
    brush5_razorgap: "",
    brush6_razorgap: "",
    brush1_tension_r: "",
    brush2_tension_r: "",
    brush3_tension_r: "",
    brush4_tension_r: "",
    brush5_tension_r: "",
    brush6_tension_r: "",
    brush1_tension_m: "",
    brush2_tension_m: "",
    brush3_tension_m: "",
    brush4_tension_m: "",
    brush5_tension_m: "",
    brush6_tension_m: "",
    brush1_tension_v: "",
    brush2_tension_v: "",
    brush3_tension_v: "",
    brush4_tension_v: "",
    brush5_tension_v: "",
    brush6_tension_v: "",
    stator1_no: "",
    date1: "",
    armature_no1: "",
    bhrr_no1: "",
    assembly_name: "",
    certified_1name: "",
    vastveek_1: "",
    vastveek_2a: "",
    vastveek_2b: "",
    vastveek_2c: "",
    vastveek_2d: "",
    vastveek_3: "",
    vastveek_4mm: "",
    vastveek_4mbtb: "",
    vastveek_4tir: "",
    vastveek_5pi: "",
    vastveek_5si: "",
    pinion_name: "",
    pinion_date: "",
    certified_2name: "",

    vastveek_01: "",
    vastveek_02: "",
    vastveek_03: "",
    vastveek_04: "",
    vastveek_05: "",
    vastveek_06a: "",
    vastveek_06b: "",
    vastveek_06c: "",
    change_01: "",
    change_02: "",
    change_03: "",
    change_04: "",
    change_05: "",
    change_06: "",
    change_07: "",
    change_08: "",
  });

  const fetchData = async () => {
    try {
      const { uid } = await getUsername();
      const response = await axios.get(
        `${BASE_URL}/api/revert/TM-TAO_659/${uid}`
      );
      console.log(response);
      const fetchedData = response.data[0]; // Assuming response.data contains the fetched data
      setData({
        uid: fetchedData.uid,
        stator_no: fetchedData.stator_no,
        armature_no: fetchedData.armature_no,
        bhrr_no: fetchedData.bhrr_no,
        kmo_no: fetchedData.kmo_no,
        kmo_make: fetchedData.kmo_make,
        karmachari_name: fetchedData.karmachari_name,
        engine_no: fetchedData.engine_no,
        nikalne_date: fetchedData.nikalne_date,
        kmv_no: fetchedData.kmv_no,
        nikalne_reason: fetchedData.nikalne_reason,
        manak_01_1: fetchedData.manak_01_1,
        vastavik1: fetchedData.vastaik1,
        vastavik2: fetchedData.vastavik2,
        vastavik3_mm: fetchedData.vastavik3_mm,
        vastavik3_microm1: fetchedData.vastavik3_microm1,
        vastavik3_microm2: fetchedData.vastavik3_microm2,
        vastavik4: fetchedData.vastavik4,
        vastavik5: fetchedData.vastavik5,
        vastavik6: fetchedData.vastavik6,
        vastavik7_make1: fetchedData.vastavik7_make1,
        vastavik7_no1: fetchedData.vastavik7_no1,
        vastavik7_year1: fetchedData.vastavik7_year1,
        vastavik7_clearance1: fetchedData.vastavik7_clearance1,
        vastavik7_make2: fetchedData.vastavik7_make2,
        vastavik7_no2: fetchedData.vastavik7_no2,
        vastavik7_year2: fetchedData.vastavik7_year2,
        vastavik7_clearance2: fetchedData.vastavik7_clearance2,
        overhall_01name: fetchedData.overhall_01name,
        date_01_1: fetchedData.date_01_1,
        overhall_02name: fetchedData.overhall_02name,
        vastavik01: fetchedData.vastavik01,
        vastavik02: fetchedData.vastavik02,
        vastavik03: fetchedData.vastavik03,
        vastavik04: fetchedData.vastavik04,
        vastavik05: fetchedData.vastavik05,
        vastavik06: fetchedData.vastavik06,
        vastavik07: fetchedData.vastavik07,
        vastavik08: fetchedData.vastavik08,
        vastavik09: fetchedData.vastavik09,
        vastavik_1a: fetchedData.vastavik_1a,
        vastavik_1b: fetchedData.vastavik_1b,
        vastavik_1c: fetchedData.vastavik_1c,
        vastavik_2mp1: fetchedData.vastavik_2mp1,
        vastavik_2ip1: fetchedData.vastavik_2ip1,
        vastavik_2mainlead1: fetchedData.vastavik_2mainlead1,
        vastavik_3mp2: fetchedData.vastavik_3mp2,
        vastavik_3ip2: fetchedData.vastavik_3ip2,
        vastavik_3mainlead2: fetchedData.vastavik_3mainlead2,
        vastavik_4: fetchedData.vastavik_4,
        vastavik_5: fetchedData.vastavik_5,
        overhall_1name: fetchedData.overhall_1name,
        date_1: fetchedData.date_1,
        overhall_2name: fetchedData.overhall_2name,
        date_2: fetchedData.date_2,
        vastvik_1: fetchedData.vastvik_1,
        vastvik_2: fetchedData.vastvik_2,
        vastvik_3: fetchedData.vastvik_3,
        vastvik_4: fetchedData.vastvik_4,
        vastvik_5: fetchedData.vastvik_5,
        vastvik_6: fetchedData.vastvik_6,
        vastvik_7: fetchedData.vastvik_7,
        vastvik_8: fetchedData.vastvik_8,
        vastvik_9: fetchedData.vastvik_9,
        vastvik_10: fetchedData.vastvik_10,
        vastvik_11: fetchedData.vastvik_11,
        vastvik_11a: fetchedData.vastvik_11a,
        vastvik_11b: fetchedData.vastvik_11b,
        vastvik_11c: fetchedData.vastvik_11c,
        vastvik_11d: fetchedData.vastvik_11d,
        vastvik_11e: fetchedData.vastvik_11e,
        vastvik_12: fetchedData.vastvik_12,
        vastvik_13: fetchedData.vastvik_13,
        vastvik_14: fetchedData.vastvik_14,
        vastvik_15: fetchedData.vastvik_15,
        vastvik_16: fetchedData.vastvik_16,
        vastvik_17: fetchedData.vastvik_17,
        manak_18make01: fetchedData.manak_18make01,
        manak_18no01: fetchedData.manak_18no01,
        manak_18year01: fetchedData.manak_18year01,
        manak_18make02: fetchedData.manak_18make02,
        manak_18no02: fetchedData.manak_18no02,
        manak_18year02: fetchedData.manak_18year02,
        vastvik_18: fetchedData.vastvik_18,
        vastvik_19a: fetchedData.vastvik_19a,
        vastvik_19b: fetchedData.vastvik_19b,
        vastvik_20: fetchedData.vastvik_20,
        vastvik_21a: fetchedData.vastvik_21a,
        bhrr1_no: fetchedData.bhrr1_no,
        date_01: fetchedData.date_01,
        overhall1_name: fetchedData.overhall1_name,
        certified_name: fetchedData.certified_name,
        vastvik_01: fetchedData.vastvik_01,
        vastvik_02: fetchedData.vastvik_02,
        vastvik_03: fetchedData.vastvik_03,
        vastvik_04: fetchedData.vastvik_04,
        vastvik_05: fetchedData.vastvik_05,
        vastvik_06: fetchedData.vastvik_06,
        brush1_no: fetchedData.brush1_no,
        brush2_no: fetchedData.brush2_no,
        brush3_no: fetchedData.brush3_no,
        brush4_no: fetchedData.brush4_no,
        brush5_no: fetchedData.brush5_no,
        brush6_no: fetchedData.brush6_no,
        brush1_grade: fetchedData.brush1_grade,
        brush2_grade: fetchedData.brush2_grade,
        brush3_grade: fetchedData.brush3_grade,

        brush4_grade: fetchedData.brush4_grade,
        brush5_grade: fetchedData.brush5_grade,
        brush6_grade: fetchedData.brush6_grade,
        brush1_gap: fetchedData.brush1_gap,
        brush2_gap: fetchedData.brush2_gap,
        brush3_gap: fetchedData.brush3_gap,
        brush4_gap: fetchedData.brush4_gap,
        brush5_gap: fetchedData.brush5_gap,
        brush6_gap: fetchedData.brush6_gap,
        brush1_razorgap: fetchedData.brush1_razorgap,
        brush2_razorgap: fetchedData.brush2_razorgap,
        brush3_razorgap: fetchedData.brush3_razorgap,
        brush4_razorgap: fetchedData.brush4_razorgap,
        brush5_razorgap: fetchedData.brush5_razorgap,
        brush6_razorgap: fetchedData.brush6_razorgap,
        brush1_tension_r: fetchedData.brush1_tension_r,
        brush2_tension_r: fetchedData.brush2_tension_r,
        brush3_tension_r: fetchedData.brush3_tension_r,
        brush4_tension_r: fetchedData.brush4_tension_r,
        brush5_tension_r: fetchedData.brush5_tension_r,
        brush6_tension_r: fetchedData.brush6_tension_r,
        brush1_tension_m: fetchedData.brush1_tension_m,
        brush2_tension_m: fetchedData.brush2_tension_m,
        brush3_tension_m: fetchedData.brush3_tension_m,
        brush4_tension_m: fetchedData.brush4_tension_m,
        brush5_tension_m: fetchedData.brush5_tension_m,
        brush6_tension_m: fetchedData.brush6_tension_m,
        brush1_tension_v: fetchedData.brush1_tension_v,
        brush2_tension_v: fetchedData.brush2_tension_v,
        brush3_tension_v: fetchedData.brush3_tension_v,
        brush4_tension_v: fetchedData.brush4_tension_v,
        brush5_tension_v: fetchedData.brush5_tension_v,
        brush6_tension_v: fetchedData.brush6_tension_v,
        stator1_no: fetchedData.stator1_no,
        date1: fetchedData.date1,
        armature_no1: fetchedData.armature_no1,
        bhrr_no1: fetchedData.bhrr_no1,
        assembly_name: fetchedData.assembly_name,
        certified_1name: fetchedData.certified_1name,
        vastveek_1: fetchedData.vastveek_1,
        vastveek_2a: fetchedData.vastveek_2a,
        vastveek_2b: fetchedData.vastveek_2b,
        vastveek_2c: fetchedData.vastveek_2c,
        vastveek_2d: fetchedData.vastveek_2d,
        vastveek_3: fetchedData.vastveek_3,
        vastveek_4mm: fetchedData.vastveek_4mm,
        vastveek_4mbtb: fetchedData.vastveek_4mbtb,
        vastveek_4tir: fetchedData.vastveek_4tir,
        vastveek_5pi: fetchedData.vastveek_5pi,
        vastveek_5si: fetchedData.vastveek_5si,
        pinion_name: fetchedData.pinion_name,
        pinion_date: fetchedData.pinion_date,
        certified_2name: fetchedData.certified_2name,
        manak_01: fetchedData.manak_01,
        vastveek_01: fetchedData.vastveek_01,
        vastveek_02: fetchedData.vastveek_02,
        vastveek_03: fetchedData.vastveek_03,
        vastveek_04: fetchedData.vastveek_04,
        vastveek_05: fetchedData.vastveek_05,
        vastveek_06a: fetchedData.vastveek_06a,
        vastveek_06b: fetchedData.vastveek_06b,
        vastveek_06c: fetchedData.vastveek_06c,
        change_01: fetchedData.change_01,
        change_02: fetchedData.change_02,
        change_03: fetchedData.change_03,
        change_04: fetchedData.change_04,
        change_05: fetchedData.change_05,
        change_06: fetchedData.change_06,
        change_07: fetchedData.change_07,
        change_08: fetchedData.change_08,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error if needed
    }
  };

  // Call the fetchData function when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      stator_no,
      armature_no,
      bhrr_no,
      kmo_no,
      kmo_make,
      karmachari_name,
      engine_no,
      nikalne_date,
      kmv_no,
      nikalne_reason,
      manak_01_1,
      vastavik1,
      vastavik2,
      vastavik3_mm,
      vastavik3_microm1,
      vastavik3_microm2,
      vastavik4,
      vastavik5,
      vastavik6,
      vastavik7_make1,
      vastavik7_no1,
      vastavik7_year1,
      vastavik7_clearance1,
      vastavik7_make2,
      vastavik7_no2,
      vastavik7_year2,
      vastavik7_clearance2,
      overhall_01name,
      date_01_1,
      overhall_02name,
      vastavik01,
      vastavik02,
      vastavik03,
      vastavik04,
      vastavik05,
      vastavik06,
      vastavik07,
      vastavik08,
      vastavik09,
      vastavik_1a,
      vastavik_1b,
      vastavik_1c,
      vastavik_2mp1,
      vastavik_2ip1,
      vastavik_2mainlead1,
      vastavik_3mp2,
      vastavik_3ip2,
      vastavik_3mainlead2,
      vastavik_4,
      vastavik_5,
      overhall_1name,
      date_1,
      overhall_2name,
      date_2,
      vastvik_1,
      vastvik_2,
      vastvik_3,
      vastvik_4,
      vastvik_5,
      vastvik_6,
      vastvik_7,
      vastvik_8,
      vastvik_9,
      vastvik_10,
      vastvik_11,
      vastvik_11a,
      vastvik_11b,
      vastvik_11c,
      vastvik_11d,
      vastvik_11e,
      vastvik_12,
      vastvik_13,
      vastvik_14,
      vastvik_15,
      vastvik_16,
      vastvik_17,
      manak_18make01,
      manak_18no01,
      manak_18year01,
      manak_18make02,
      manak_18no02,
      manak_18year02,
      vastvik_18,
      vastvik_19a,
      vastvik_19b,
      vastvik_20,
      vastvik_21a,
      bhrr1_no,
      date_01,
      overhall1_name,
      certified_name,
      vastvik_01,
      vastvik_02,
      vastvik_03,
      vastvik_04,
      vastvik_05,
      vastvik_06,
      brush1_no,
      brush2_no,
      brush3_no,
      brush4_no,
      brush5_no,
      brush6_no,
      brush1_grade,
      brush2_grade,
      brush3_grade,
      brush4_grade,
      brush5_grade,
      brush6_grade,
      brush1_gap,
      brush2_gap,
      brush3_gap,
      brush4_gap,
      brush5_gap,
      brush6_gap,
      brush1_razorgap,
      brush2_razorgap,
      brush3_razorgap,
      brush4_razorgap,
      brush5_razorgap,
      brush6_razorgap,
      brush1_tension_r,
      brush2_tension_r,
      brush3_tension_r,
      brush4_tension_r,
      brush5_tension_r,
      brush6_tension_r,
      brush1_tension_m,
      brush2_tension_m,
      brush3_tension_m,
      brush4_tension_m,
      brush5_tension_m,
      brush6_tension_m,
      brush1_tension_v,
      brush2_tension_v,
      brush3_tension_v,
      brush4_tension_v,
      brush5_tension_v,
      brush6_tension_v,
      stator1_no,
      date1,
      armature_no1,
      bhrr_no1,
      assembly_name,
      certified_1name,
      vastveek_1,
      vastveek_2a,
      vastveek_2b,
      vastveek_2c,
      vastveek_2d,
      vastveek_3,
      vastveek_4mm,
      vastveek_4mbtb,
      vastveek_4tir,
      vastveek_5pi,
      vastveek_5si,
      pinion_name,
      pinion_date,
      certified_2name,
      manak_01,
      vastveek_01,
      vastveek_02,
      vastveek_03,
      vastveek_04,
      vastveek_05,
      vastveek_06a,
      vastveek_06b,
      vastveek_06c,
      change_01,
      change_02,
      change_03,
      change_04,
      change_05,
      change_06,
      change_07,
      change_08,
    } = data;
    try {
      const { data } = await axios.post(`${BASE_URL}/api/resubmit/TAO_659`, {
        stator_no,
        armature_no,
        bhrr_no,
        kmo_no,
        kmo_make,
        karmachari_name,
        engine_no,
        nikalne_date,
        kmv_no,
        nikalne_reason,
        manak_01_1,
        vastavik1,
        vastavik2,
        vastavik3_mm,
        vastavik3_microm1,
        vastavik3_microm2,
        vastavik4,
        vastavik5,
        vastavik6,
        vastavik7_make1,
        vastavik7_no1,
        vastavik7_year1,
        vastavik7_clearance1,
        vastavik7_make2,
        vastavik7_no2,
        vastavik7_year2,
        vastavik7_clearance2,
        overhall_01name,
        date_01_1,
        overhall_02name,
        vastavik01,
        vastavik02,
        vastavik03,
        vastavik04,
        vastavik05,
        vastavik06,
        vastavik07,
        vastavik08,
        vastavik09,
        vastavik_1a,
        vastavik_1b,
        vastavik_1c,
        vastavik_2mp1,
        vastavik_2ip1,
        vastavik_2mainlead1,
        vastavik_3mp2,
        vastavik_3ip2,
        vastavik_3mainlead2,
        vastavik_4,
        vastavik_5,
        overhall_1name,
        date_1,
        overhall_2name,
        date_2,
        vastvik_1,
        vastvik_2,
        vastvik_3,
        vastvik_4,
        vastvik_5,
        vastvik_6,
        vastvik_7,
        vastvik_8,
        vastvik_9,
        vastvik_10,
        vastvik_11,
        vastvik_11a,
        vastvik_11b,
        vastvik_11c,
        vastvik_11d,
        vastvik_11e,
        vastvik_12,
        vastvik_13,
        vastvik_14,
        vastvik_15,
        vastvik_16,
        vastvik_17,
        manak_18make01,
        manak_18no01,
        manak_18year01,
        manak_18make02,
        manak_18no02,
        manak_18year02,
        vastvik_18,
        vastvik_19a,
        vastvik_19b,
        vastvik_20,
        vastvik_21a,
        bhrr1_no,
        date_01,
        overhall1_name,
        certified_name,
        vastvik_01,
        vastvik_02,
        vastvik_03,
        vastvik_04,
        vastvik_05,
        vastvik_06,
        brush1_no,
        brush2_no,
        brush3_no,
        brush4_no,
        brush5_no,
        brush6_no,
        brush1_grade,
        brush2_grade,
        brush3_grade,
        brush4_grade,
        brush5_grade,
        brush6_grade,
        brush1_gap,
        brush2_gap,
        brush3_gap,
        brush4_gap,
        brush5_gap,
        brush6_gap,
        brush1_razorgap,
        brush2_razorgap,
        brush3_razorgap,
        brush4_razorgap,
        brush5_razorgap,
        brush6_razorgap,
        brush1_tension_r,
        brush2_tension_r,
        brush3_tension_r,
        brush4_tension_r,
        brush5_tension_r,
        brush6_tension_r,
        brush1_tension_m,
        brush2_tension_m,
        brush3_tension_m,
        brush4_tension_m,
        brush5_tension_m,
        brush6_tension_m,
        brush1_tension_v,
        brush2_tension_v,
        brush3_tension_v,
        brush4_tension_v,
        brush5_tension_v,
        brush6_tension_v,
        stator1_no,
        date1,
        armature_no1,
        bhrr_no1,
        assembly_name,
        certified_1name,
        vastveek_1,
        vastveek_2a,
        vastveek_2b,
        vastveek_2c,
        vastveek_2d,
        vastveek_3,
        vastveek_4mm,
        vastveek_4mbtb,
        vastveek_4tir,
        vastveek_5pi,
        vastveek_5si,
        pinion_name,
        pinion_date,
        certified_2name,
        manak_01,
        vastveek_01,
        vastveek_02,
        vastveek_03,
        vastveek_04,
        vastveek_05,
        vastveek_06a,
        vastveek_06b,
        vastveek_06c,
        change_01,
        change_02,
        change_03,
        change_04,
        change_05,
        change_06,
        change_07,
        change_08,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Submitted successfully");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during checklist submission:", error);
      toast.error("Fields are Missing");
    }
  };

  return (
    <>
      <main className="m-5 p-5 xl:max-w-8xl xl:mx-auto bg-white rounded shadow overflow-x-auto">
        {showForm ? (
          <div>
            <div className="flex flex-col justify-center px-8">
              <Details
                stator_no={stator_no}
                armature_no={armature_no}
                bhrr_no={bhrr_no}
                kmo_no={kmo_no}
                kmo_make={kmo_make}
                karmachari_name={karmachari_name}
                engine_no={engine_no}
                nikalne_date={nikalne_date}
                kmv_no={kmv_no}
                nikalne_reason={nikalne_reason}
              />

              <br></br>

              <Table
                manak_01_1={manak_01_1}
                vastavik1={vastavik1}
                vastavik2={vastavik2}
                vastavik3_mm={vastavik3_mm}
                vastavik3_microm1={vastavik3_microm1}
                vastavik3_microm2={vastavik3_microm2}
                vastavik4={vastavik4}
                vastavik5={vastavik5}
                vastavik6={vastavik6}
                vastavik7_make1={vastavik7_make1}
                vastavik7_no1={vastavik7_no1}
                vastavik7_year1={vastavik7_year1}
                vastavik7_clearance1={vastavik7_clearance1}
                vastavik7_make2={vastavik7_make2}
                vastavik7_no2={vastavik7_no2}
                vastavik7_year2={vastavik7_year2}
                vastavik7_clearance2={vastavik7_clearance2}
                overhall_01name={overhall_01name}
                date_01_1={date_01_1}
                overhall_02name={overhall_02name}
                vastavik01={vastavik01}
                vastavik02={vastavik02}
                vastavik03={vastavik03}
                vastavik04={vastavik04}
                vastavik05={vastavik05}
                vastavik06={vastavik06}
                vastavik07={vastavik07}
                vastavik08={vastavik08}
                vastavik09={vastavik09}
                vastavik_1a={vastavik_1a}
                vastavik_1b={vastavik_1b}
                vastavik_1c={vastavik_1c}
                vastavik_2mp1={vastavik_2mp1}
                vastavik_2ip1={vastavik_2ip1}
                vastavik_2mainlead1={vastavik_2mainlead1}
                vastavik_3mp2={vastavik_3mp2}
                vastavik_3ip2={vastavik_3ip2}
                vastavik_3mainlead2={vastavik_3mainlead2}
                vastavik_4={vastavik_4}
                vastavik_5={vastavik_5}
                overhall_1name={overhall_1name}
                date_1={date_1}
                overhall_2name={overhall_2name}
                date_2={date_2}
                vastvik_1={vastvik_1}
                vastvik_2={vastvik_2}
                vastvik_3={vastvik_3}
                vastvik_4={vastvik_4}
                vastvik_5={vastvik_5}
                vastvik_6={vastvik_6}
                vastvik_7={vastvik_7}
                vastvik_8={vastvik_8}
                vastvik_9={vastvik_9}
                vastvik_10={vastvik_10}
                vastvik_11={vastvik_11}
                vastvik_11a={vastvik_11a}
                vastvik_11b={vastvik_11b}
                vastvik_11c={vastvik_11c}
                vastvik_11d={vastvik_11d}
                vastvik_11e={vastvik_11e}
                vastvik_12={vastvik_12}
                vastvik_13={vastvik_13}
                vastvik_14={vastvik_14}
                vastvik_15={vastvik_15}
                vastvik_16={vastvik_16}
                vastvik_17={vastvik_17}
                manak_18make01={manak_18make01}
                manak_18no01={manak_18no01}
                manak_18year01={manak_18year01}
                manak_18make02={manak_18make02}
                manak_18no02={manak_18no02}
                manak_18year02={manak_18year02}
                vastvik_18={vastvik_18}
                vastvik_19a={vastvik_19a}
                vastvik_19b={vastvik_19b}
                vastvik_20={vastvik_20}
                vastvik_21a={vastvik_21a}
                vastvik_21={vastvik_1}
                bhrr1_no={bhrr1_no}
                date_01={date_1}
                overhall1_name={overhall1_name}
                certified_name={certified_name}
                vastvik_01={vastvik_01}
                vastvik_02={vastvik_02}
                vastvik_03={vastvik_03}
                vastvik_04={vastvik_04}
                vastvik_05={vastvik_05}
                vastvik_06={vastvik_06}
                brush1_no={brush1_no}
                brush2_no={brush2_no}
                brush3_no={brush3_no}
                brush4_no={brush4_no}
                brush5_no={brush5_no}
                brush6_no={brush6_no}
                brush1_grade={brush1_grade}
                brush2_grade={brush2_grade}
                brush3_grade={brush3_grade}
                brush4_grade={brush4_grade}
                brush5_grade={brush5_grade}
                brush6_grade={brush6_grade}
                brush1_gap={brush1_gap}
                brush2_gap={brush2_gap}
                brush3_gap={brush3_gap}
                brush4_gap={brush4_gap}
                brush5_gap={brush5_gap}
                brush6_gap={brush6_gap}
                brush1_razorgap={brush1_razorgap}
                brush2_razorgap={brush2_razorgap}
                brush3_razorgap={brush3_razorgap}
                brush4_razorgap={brush4_razorgap}
                brush5_razorgap={brush5_razorgap}
                brush6_razorgap={brush6_razorgap}
                brush1_tension_r={brush1_tension_r}
                brush2_tension_r={brush2_tension_r}
                brush3_tension_r={brush3_tension_r}
                brush4_tension_r={brush4_tension_r}
                brush5_tension_r={brush5_tension_r}
                brush6_tension_r={brush6_tension_r}
                brush1_tension_m={brush1_tension_m}
                brush2_tension_m={brush2_tension_m}
                brush3_tension_m={brush3_tension_m}
                brush4_tension_m={brush4_tension_m}
                brush5_tension_m={brush5_tension_m}
                brush6_tension_m={brush6_tension_m}
                brush1_tension_v={brush1_tension_v}
                brush2_tension_v={brush2_tension_v}
                brush3_tension_v={brush3_tension_v}
                brush4_tension_v={brush4_tension_v}
                brush5_tension_v={brush5_tension_v}
                brush6_tension_v={brush6_tension_v}
                stator1_no={stator1_no}
                date1={date1}
                armature_no1={armature_no1}
                bhrr_no1={bhrr_no1}
                assembly_name={assembly_name}
                certified_1name={certified_1name}
                vastveek_1={vastveek_1}
                vastveek_2a={vastveek_2a}
                vastveek_2b={vastveek_2b}
                vastveek_2c={vastveek_2c}
                vastveek_2d={vastveek_2d}
                vastveek_3={vastveek_3}
                vastveek_4mm={vastveek_4mm}
                vastveek_4mbtb={vastveek_4mbtb}
                vastveek_4tir={vastveek_4tir}
                vastveek_5pi={vastveek_5pi}
                vastveek_5si={vastveek_5si}
                pinion_name={pinion_name}
                pinion_date={pinion_date}
                certified_2name={certified_2name}
                vastveek_01={vastveek_01}
                vastveek_02={vastveek_02}
                vastveek_03={vastveek_03}
                vastveek_04={vastveek_04}
                vastveek_05={vastveek_05}
                vastveek_06a={vastveek_06a}
                vastveek_06b={vastveek_06b}
                vastveek_06c={vastveek_06c}
                change_01={change_01}
                change_02={change_02}
                change_03={change_03}
                change_04={change_04}
                change_05={change_05}
                change_06={change_06}
                change_07={change_07}
                change_08={change_08}
              />

              <br></br>

              <footer className="flex justify-center items-center space-x-4 px-4">
                <span style={{ whiteSpace: "pre" }}> </span>
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5"
                >
                  Edit
                </button>
                <button
                  onClick={handlePrint}
                  className="bg-green-500 py-2 px-8 rounded shadow border-2 border-green-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5"
                >
                  Print
                </button>
                <button
                  className="bg-yellow-400 py-2 px-8 rounded shadow border-2 border-yellow-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </footer>
            </div>
          </div>
        ) : (
          <>
            <head>
              <meta charset="UTF-8"></meta>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              ></meta>
              <title>TAO-659 Traction Motor OH checksheet</title>
              <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
              ></link>
              <link rel="stylesheet" href="TAO-659.css"></link>
            </head>
            <body>
              <section className="container">
                <form>
                  <h4 className="title">
                    TAO-659कर्षण मोटर ओवरहाल करने के लिये जॉंच पत्रक<br></br>
                    कर्षण मोटर डिस्‍मेंटल करने से पूर्व की जाने वाली जॉंच
                  </h4>
                  <div className="form-container">
                    <div className="form-group">
                      <label htmlFor="state_number">स्‍टेटर क्र.-</label>
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.stator_no}
                        onChange={(e) => {
                          setData({ ...data, stator_no: e.target.value });
                          setStator_no(e.target.value);
                        }}
                      ></input>
                      <label htmlFor="armature_number">आर्मेचर क्र.-</label>
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.armature_no}
                        onChange={(e) => {
                          setData({ ...data, armature_no: e.target.value });
                          setArmature_no(e.target.value);
                        }}
                      ></input>
                      <label htmlFor="bhr_arr_number">
                        बी.एच.आर.आर. अ.क्र.-
                      </label>
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.bhrr_no}
                        onChange={(e) => {
                          setData({ ...data, bhrr_no: e.target.value });
                          setBhrr_no(e.target.value);
                        }}
                      ></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                      <label htmlFor="motor_type">क.मो. का प्रकार:-</label>
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.kmo_no}
                        onChange={(e) => {
                          setData({ ...data, kmo_no: e.target.value });
                          setKmo_no(e.target.value);
                        }}
                      ></input>
                      <label htmlFor="motor_make">क.मो. का मेक:-</label>
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.kmo_make}
                        onChange={(e) => {
                          setData({ ...data, kmo_make: e.target.value });
                          setKmo_make(e.target.value);
                        }}
                      ></input>
                      <label htmlFor="employee_name">कर्मचारी का नाम:-</label>
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.karmachari_name}
                        onChange={(e) => {
                          setData({ ...data, karmachari_name: e.target.value });
                          setKarmachari_name(e.target.value);
                        }}
                      ></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                      <label htmlFor="engine_number">इंजीन क्रमांक:-</label>
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.engine_no}
                        onChange={(e) => {
                          setData({ ...data, engine_no: e.target.value });
                          setEngine_no(e.target.value);
                        }}
                      ></input>
                      <label htmlFor="removal_date">निकालने का दिनांक:-</label>
                      <input
                        type="date"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.nikalne_date}
                        onChange={(e) => {
                          setData({ ...data, nikalne_date: e.target.value });
                          setNikalne_date(e.target.value);
                        }}
                      ></input>
                      <label htmlFor="motor_removal_date">
                        क.मो.विच्‍छेदन दिनांक:-
                      </label>
                      <input
                        type="date"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.kmv_no}
                        onChange={(e) => {
                          setData({ ...data, kmv_no: e.target.value });
                          setKmv_no(e.target.value);
                        }}
                      ></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                      <label htmlFor="removal_reason">निकालने का कारण:-</label>
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.nikalne_reason}
                        onChange={(e) => {
                          setData({ ...data, nikalne_reason: e.target.value });
                          setNikalne_reason(e.target.value);
                        }}
                      ></input>
                    </div>
                  </div>
                  <br> </br>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>अ.क्र</th>
                          <th>जॉंच / परीक्षण</th>
                          <th>मानक</th>
                          <th>वास्‍तविक</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            कर्षण मोटर को व्हिजीयुली चेक करें और पाए गए दोष तथा
                            त्रृटिया नोट करें
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.manak_01_1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  manak_01_1: e.target.value,
                                });
                                setManak_01_1(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik1}
                              onChange={(e) => {
                                setData({ ...data, vastavik1: e.target.value });
                                setVastavik1(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>1000 V मेगर से आई.आर. व्‍हॅल्‍युचेक करें</td>
                          <td> &gt 10 MΩ</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik2}
                              onChange={(e) => {
                                setData({ ...data, vastavik2: e.target.value });
                                setVastavik2(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            मोटर को चलाये और ओव्‍हॅलिटी जॉंच करें (संदर्भ:-
                            SMI-6) या प्रोफाइलरसे काम्‍युटेटर प्रोफाइल जॉंच करें
                            ।
                          </td>
                          <td>
                            अधिकतम मर्यादा 0.06 मी.मी. या<br></br>
                            एम.बी.टी.बी.10 µ मी.<br></br>
                            टीआयआर 60 µ मी.
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik3_mm}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik3_mm: e.target.value,
                                });
                                setVastavik3_mm(e.target.value);
                              }}
                            ></input>{" "}
                            मी.मी.<br></br>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik3_microm1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik3_microm1: e.target.value,
                                });
                                setVastavik3_microm1(e.target.value);
                              }}
                            ></input>{" "}
                            µमी.<br></br>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik3_microm2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik3_microm2: e.target.value,
                                });
                                setVastavik3_microm2(e.target.value);
                              }}
                            ></input>{" "}
                            µमी.
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            मोटर को 1000 आरपीएम पर चला कर<br></br>
                            (अ) रोटेटींग नॉइज<br></br>
                            (ब) व्‍हायब्रेशन तथा बिअरींग की स्थिती जॉंच करें
                            <br></br>
                            (क) बिअरींग
                            ध्‍वनी&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;पी.ई.<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;सी.ई.
                            <br></br>
                            (ड) ब्रश चॅटरिंग<br></br>
                            (इ) एस.पी.एम. रिडींग नोट
                            करें&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;पी.ई.<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;सी.ई.
                          </td>
                          <td>
                            <br></br>
                            निर्विघ्‍न चलना चाहिए<br></br>
                            कोई वायब्रेशन नही<br></br>
                            निर्विघ्‍न चलना चाहिए<br></br>
                            निर्विघ्‍न चलना चाहिए<br></br>
                            कोई चॅटरिंग नही<br></br>
                            लाल / पीला / हरालाल /<br> </br>पीला / हरा
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik4}
                              onChange={(e) => {
                                setData({ ...data, vastavik4: e.target.value });
                                setVastavik4(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            पिनीयन और काम्‍युटेटर साईड बियरींग को साफ करें तथा
                            रोलर चेक करें ।
                          </td>
                          <td>किया / नही किया</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik5}
                              onChange={(e) => {
                                setData({ ...data, vastavik5: e.target.value });
                                setVastavik5(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            पिनियन निकालने के बाद शाप-ट की पिनियन सिट की स्थिती
                          </td>
                          <td>ठीक है</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik6}
                              onChange={(e) => {
                                setData({ ...data, vastavik6: e.target.value });
                                setVastavik6(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>
                            डिस्‍मेंटल करने से पूर्व बिअरींग तथा क्लिअरन्‍स
                            <br></br>
                            पी.ई.<br></br>सी.ई.
                          </td>
                          <td colSpan="4">
                            <br />
                            मेक
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik7_make1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik7_make1: e.target.value,
                                });
                                setVastavik7_make1(e.target.value);
                              }}
                            ></input>
                            क्र
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik7_no1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik7_no1: e.target.value,
                                });
                                setVastavik7_no1(e.target.value);
                              }}
                            ></input>
                            निर्मिती वर्ष
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik7_year1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik7_year1: e.target.value,
                                });
                                setVastavik7_year1(e.target.value);
                              }}
                            ></input>
                            .क्लिअरन्‍स
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik7_clearance1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik7_clearance1: e.target.value,
                                });
                                setVastavik7_clearance1(e.target.value);
                              }}
                            ></input>
                            <br></br>
                            मेक
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik7_make2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik7_make2: e.target.value,
                                });
                                setVastavik7_make2(e.target.value);
                              }}
                            ></input>
                            क्र
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik7_no2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik7_no2: e.target.value,
                                });
                                setVastavik7_no2(e.target.value);
                              }}
                            ></input>
                            . निर्मिती वर्ष
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik7_year2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik7_year2: e.target.value,
                                });
                                setVastavik7_year2(e.target.value);
                              }}
                            ></input>
                            क्लिअरन्‍स{" "}
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik7_clearance2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik7_clearance2: e.target.value,
                                });
                                setVastavik7_clearance2(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                  <br></br>
                </form>
              </section>
              <div style="height: 25px;"></div>

              <section className="container">
                <form>
                  <header className="header">
                    <h4 className="title">
                      TAO-659कर्षण मोटर ओवरहाल करने के लिये जॉंच पत्रक<br></br>
                      स्‍टेटर के लिये असेंब्‍ली पूर्व जॉंच पत्रक
                    </h4>
                  </header>
                  <div className="form-container">
                    <label htmlFor="oval_name_1">
                      ओवलहाल करने वाले का नाम (1)
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.overhall_01name}
                        onChange={(e) => {
                          setData({ ...data, overhall_01name: e.target.value });
                          setOverhall_01name(e.target.value);
                        }}
                      ></input>
                    </label>
                    <label htmlFor="oval_name_2">
                      (2)
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.overhall_02name}
                        onChange={(e) => {
                          setData({ ...data, overhall_02name: e.target.value });
                          setOverhall_02name(e.target.value);
                        }}
                      ></input>
                    </label>
                    <br></br>
                    <label htmlFor="Date">
                      दिनांक –
                      <input
                        type="date"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.date_01_1}
                        onChange={(e) => {
                          setData({ ...data, date_01_1: e.target.value });
                          setDate_01_1(e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                  <br> </br>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>अ.क्र</th>
                          <th>जॉंच / परीक्षण</th>
                          <th>मानक</th>
                          <th>वास्‍तविक</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            स्‍टेटर नोज लग एरिया को साफ करके MPT(मॅग्‍नेटीक
                            पार्टीकल टेस्‍ट)/DPT(डाय पेनिट्रंट टेस्‍ट) व्‍दारा
                            चेकिंग करना ।
                          </td>
                          <td>किया </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik01}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik01: e.target.value,
                                });
                                setVastavik01(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            उपरी तथा निचल गिअर केस लग की सफाई के उपरान्‍त
                            MPT/DPT चेक करें{" "}
                          </td>
                          <td>किया </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik02}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik02: e.target.value,
                                });
                                setVastavik02(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            एण्‍डशिल्‍ड बोल्‍ट के लिए थ्रेड, सस्‍पेंशन टयुब
                            एरिया, लिप-टींग हुक आदि की स्थिती का व्हिजीयुली चेक
                            करें|
                          </td>
                          <td>किया </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik03}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik03: e.target.value,
                                });
                                setVastavik03(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            नोज लायनर का गॅप सुनिश्चित करें। (संदर्भ.:- SMI-186)
                          </td>
                          <td>304.8 + 0.75 मी.मी - 0.00 मी.मी</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik04}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik04: e.target.value,
                                });
                                setVastavik04(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            सस्‍पेंशन टयुब कॉलर का डायमेंशन चेक करें |
                            (संदर्भ.:- CLW Drg 0-TWD-092-007)
                          </td>
                          <td>310.00 - 310.08मी.मी</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik05}
                              onChange={(e) => {
                                setData({ ...data, vastvik05: e.target.value });
                                setVastavik05(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            स्‍टेटर का बोअर डाया
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;पी.ई.
                            <br></br>
                            (संदर्भ.:- CLW Drg
                            0-TWD-092-007)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;सी.ई.
                          </td>
                          <td>
                            590+ 0.072 मी.मी.<br></br>
                            590+ 0.00 मी.मी.
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik06}
                              onChange={(e) => {
                                setData({ ...data, vastvik06: e.target.value });
                                setVastavik06(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>
                            स्‍टेटरमे MP और IP व्‍काईल, पोल शुज, टर्मीनल,
                            इन्‍सुलेटर तथा लिडआदि की स्थिती का व्हिजीयुली चेक
                            करें{" "}
                          </td>
                          <td>किया </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik07}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik07: e.target.value,
                                });
                                setVastavik07(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>
                            टॉर्करेंच से MP और IP फीक्‍सींग बोल्‍ट का प्रापर
                            टाईटनेस चेक करना
                          </td>
                          <td>
                            MP (M20) – 20Kg/M<br></br>
                            IP (M14/16) –10 Kg/M
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik08}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik08: e.target.value,
                                });
                                setVastavik08(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>
                            पोल टू पोल डाया चेक करें
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;मेन
                            पोल
                            <br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;इंटर
                            पोल
                          </td>
                          <td>
                            511 मी.मी<br></br>
                            512 मी.मी
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik09}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik09: e.target.value,
                                });
                                setVastavik09(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                  <br></br>
                </form>
              </section>
              <div style="height: 25px;"></div>

              <section className="container">
                <form>
                  <header className="header">
                    <h4 className="title">
                      TAO-659कर्षण मोटर ओवरहाल करने के लिये जॉंच पत्रक
                      <br></br>स्‍टेटर के लिये असेंब्‍ली पूर्व जॉंच पत्रक
                    </h4>
                  </header>
                  <br></br>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>अ.क्र</th>
                          <th>जॉंच / परीक्षण</th>
                          <th>मानक</th>
                          <th>वास्‍तविक</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>1000 v मेगर से आई.आर. व्‍हॅल्‍यु</td>
                          <td>
                            एम.पी. से अर्थ 10 M <br></br>
                            आइ.पी.से अर्थ 10 M <br></br>
                            मेन लिड से अर्थ 10 M{" "}
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik_1a}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik_1a: e.target.value,
                                });
                                setVastavik_1a(e.target.value);
                              }}
                            ></input>
                            <br></br>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik_1b}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik_1b: e.target.value,
                                });
                                setVastavik_1b(e.target.value);
                              }}
                            ></input>
                            <br></br>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik_1c}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik_1c: e.target.value,
                                });
                                setVastavik_1c(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            हाय व्‍होल्‍टेज टेस्‍ट (1 मिनीट के लिए करना ।
                            उपयोगीवाइंडिंग के लिए 2KV पर और नये वाइंडिग के लिए
                            2.5 KV पर{" "}
                          </td>
                          <td>लिकेज करंट अधिकतम 10 मीली एम्‍पीअर</td>
                          <td>
                            एम.पी.
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik_2mp1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik_2mp1: e.target.value,
                                });
                                setVastavik_2mp1(e.target.value);
                              }}
                            ></input>
                            <br></br>
                            आइ.पी.
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                            ></input>
                            <br></br>
                            value={data.vastavik_2ip1}
                            onChange=
                            {(e) => {
                              setData({
                                ...data,
                                vastavik_2ip1: e.target.value,
                              });
                              setVastavik_2ip1(e.target.value);
                            }}
                            मेनलिड{" "}
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik_2mainlead1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik_2mainlead1: e.target.value,
                                });
                                setVastavik_2mainlead1(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            हाय करंट इंजेक्‍शन टेस्‍ट 500 अँम्‍पीयर डी.सी
                            <br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;एम.पी.
                            <br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;आइ.पी.
                            <br></br>
                            (संदर्भ: SMI-271){" "}
                          </td>
                          <td>
                            3.7 ± 0.2 व्‍होल्‍ट<br></br>
                            2.7 ± 0.2 व्‍होल्‍ट
                          </td>
                          <td>
                            एम.पी.
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik_3mp2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik_3mp2: e.target.value,
                                });
                                setVastavik_3mp2(e.target.value);
                              }}
                            ></input>
                            <br></br>
                            आइ.पी.
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik_3ip2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik_3ip2: e.target.value,
                                });
                                setVastavik_3ip2(e.target.value);
                              }}
                            ></input>
                            <br></br>
                            मेनलिड
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik_3mainlead2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik_3mainlead2: e.target.value,
                                });
                                setVastavik_3mainlead2(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>1000 v मेगर से आई.आर.व्‍हॅल्‍यु (पूरा सर्किट)</td>
                          <td>न्‍युनतम 50 M </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik_4}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik_4: e.target.value,
                                });
                                setVastavik_4(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            एंड शिल्ड का
                            डाया&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;पी.ई.
                            <br></br>
                            (संदर्भ.:- CLW Drg 1-TWD-092-006 Alt.8) <br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;सी.ई.
                            <br></br>
                            (संदर्भ.:- CLW Drg 1-TWD-092-005)
                          </td>
                          <td>
                            590 + 0.125 मी.मी<br></br>+ 0.080 मी.मी<br></br>
                            590 + 0.125 मी.मी<br></br>+ 0.080 मी.मी
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastavik_5}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastavik_5: e.target.value,
                                });
                                setVastavik_5(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                  <br></br>
                </form>
              </section>
              <div style="height: 25px;"></div>

              <section className="container">
                <form>
                  <header className="header">
                    <h4 className="title">
                      TAO-659कर्षण मोटर ओवरहाल करने के लिये जॉंच पत्रक
                      <br></br>आर्मेचर एवं एंडशिल्‍डके लिये असेंब्‍ली पूर्व जॉंच
                      पत्रक
                    </h4>
                  </header>
                  <div className="form-container">
                    <label htmlFor="oval_name_1">
                      ओवलहाल करने वाले का नाम (1)
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.overhall_1name}
                        onChange={(e) => {
                          setData({ ...data, overhall_1name: e.target.value });
                          setOverhall_1name(e.target.value);
                        }}
                      ></input>
                    </label>
                    <label htmlFor="Date">
                      दिनांक –
                      <input
                        type="date"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.date_1}
                        onChange={(e) => {
                          setData({ ...data, date_1: e.target.value });
                          setDate_1(e.target.value);
                        }}
                      ></input>
                    </label>
                    <br></br>
                    <label htmlFor="oval_name_2">
                      (2)
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.overhall_2name}
                        onChange={(e) => {
                          setData({ ...data, overhall_2name: e.target.value });
                          setOverhall_2name(e.target.value);
                        }}
                      ></input>
                    </label>
                    <label htmlFor="Date">
                      दिनांक –
                      <input
                        type="date"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.date_2}
                        onChange={(e) => {
                          setData({ ...data, date_2: e.target.value });
                          setDate_2(e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                  <br> </br>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>अ.क्र</th>
                          <th>जॉंच / परीक्षण</th>
                          <th>मानक</th>
                          <th>वास्‍तविक</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            आर्मेचर शाप-ट UST कीजॉंच करें । (संदर्भ :-SMI- 150)
                          </td>
                          <td>कोई प-लॉ नही ।</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_1}
                              onChange={(e) => {
                                setData({ ...data, vastvik_1: e.target.value });
                                setVastvik_1(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            व्‍होल्‍टेज ड्रॉप टेस्‍ट / मायक्रो ओहम टेस्‍ट
                            (संदर्भ :- SMI- 51)
                          </td>
                          <td>
                            व्‍होल्‍टेज ड्रॉप सभी सेगमेंट पर<br></br> समान
                            (अधिकतम फर्क 5 मिली <br></br>व्‍होल्‍ट या0.06 mΩ)
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_2}
                              onChange={(e) => {
                                setData({ ...data, vastvik_2: e.target.value });
                                setVastvik_2(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            काम्‍युटेटर डाया(संदर्भ :-MM-WAM4-Vol-II Pg TM5)
                          </td>
                          <td>364 से 380 मी.मी. </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_3}
                              onChange={(e) => {
                                setData({ ...data, vastvik_3: e.target.value });
                                setVastvik_3(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>आर्मेचर कोअर डाया</td>
                          <td>500 + 0.09 मी.मी. + 0.15 मी.मी.</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_4}
                              onChange={(e) => {
                                setData({ ...data, vastvik_4: e.target.value });
                                setVastvik_4(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            पिनीयन और काम्‍युटेटर साईड के रेसर को किसीमार्किंग
                            के लिए व्हिजीयुली चेक करना ।
                          </td>
                          <td>किया </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_5}
                              onChange={(e) => {
                                setData({ ...data, vastvik_5: e.target.value });
                                setVastvik_5(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            बॅलन्‍स वेट का किसी लुजनेस के लिए व्हिजीयुली चेक
                            करना ।
                          </td>
                          <td>किया </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_6}
                              onChange={(e) => {
                                setData({ ...data, vastvik_6: e.target.value });
                                setVastvik_6(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>
                            व्‍हीकोन बॅण्‍ड एरिया एवं ईव्‍हॅल्‍युट पोर्शन को
                            व्हिजीयुली चेक करना ।
                          </td>
                          <td>किया </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_7}
                              onChange={(e) => {
                                setData({ ...data, vastvik_7: e.target.value });
                                setVastvik_7(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>आर्मेचरको व्हिजीयुली चेक करना ।</td>
                          <td>किया </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_8}
                              onChange={(e) => {
                                setData({ ...data, vastvik_8: e.target.value });
                                setVastvik_8(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>
                            किसी मार्किंग के लिए कॉम्‍युटेटर सेगमेंट को
                            व्हिजीयुली चेक करना ।
                          </td>
                          <td>किया </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_9}
                              onChange={(e) => {
                                setData({ ...data, vastvik_9: e.target.value });
                                setVastvik_9(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>
                            आर्मेचर की हवा से ब्‍लोईंग तथा संपुर्ण सफाईकरना।
                          </td>
                          <td>किया </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_10}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_10: e.target.value,
                                });
                                setVastvik_10(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>11</td>
                          <td>आर्मेचर का बेकींग तथा वार्निंशिंग करना ।</td>
                          <td>किया </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_11}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_11: e.target.value,
                                });
                                setVastvik_11(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            (a)काम्‍युटेटर पर कव्हर चढ़ाये एवं रेसर पर हल्का
                            ग्रीस लगाये।
                          </td>
                          <td>लगाया</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_11a}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_11a: e.target.value,
                                });
                                setVastvik_11a(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            (b)आर्मेचर को ब्रश से तरह से सफाइ करे एवं कॆरोसिन से
                            साफ करे।
                          </td>
                          <td>किया</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_11b}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_11b: e.target.value,
                                });
                                setVastvik_11b(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            (c)ओव्हन मे 4 घंटॆ प्रि हिट के लिये रखे एवं समय नोट
                            करे।
                          </td>
                          <td>किया</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_11c}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_11c: e.target.value,
                                });
                                setVastvik_11c(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            (d)4 घंटॆ बाद कव्हर चढा कर हल्का वार्निंशिंग करे।
                          </td>
                          <td>किया</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_11d}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_11d: e.target.value,
                                });
                                setVastvik_11d(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            e)वार्निंशिंग के पप्श्चात फिर से 4 घंटॆ क़ॆ लिये
                            120°cपर बेंकिंग हेतु रखे एवं समय नोट करे।
                          </td>
                          <td>किया</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_11e}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_11e: e.target.value,
                                });
                                setVastvik_11e(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>
                            काम्‍युटेटरकी टर्निंग करे,साईड कटींग, कॉर्नर एज
                            कटींग करना ।
                          </td>
                          <td>किया </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_12}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_12: e.target.value,
                                });
                                setVastvik_12(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>13</td>
                          <td>
                            काम्‍युटेटर की माइका कटींग करे एवं माइका डेप्‍थ चेक
                            करें ।
                          </td>
                          <td>किया डेप्‍थ- 1.2 –1.8मी.मी</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_13}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_13: e.target.value,
                                });
                                setVastvik_13(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>14</td>
                          <td>काम्‍युटेटर सेगमेंट चॅम्‍फरींग करें </td>
                          <td>किया </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_14}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_14: e.target.value,
                                });
                                setVastvik_14(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>15</td>
                          <td>टॅन डेल्‍टा रिडींग (संदर्भ :- SMI- 128)</td>
                          <td>1 KV पर 4 % 3 KVपर 6 %</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_15}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_15: e.target.value,
                                });
                                setVastvik_15(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>16</td>
                          <td>सर्ज कम्‍पॅरिझन</td>
                          <td>500 V, ± 50 Volt deflection</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_16}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_16: e.target.value,
                                });
                                setVastvik_16(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                  <br></br>
                </form>
              </section>
              <div style="height: 25px;"></div>

              <section className="container">
                <form>
                  <br> </br>
                  <div className="table-responsive">
                    <table>
                      <tbody>
                        <tr>
                          <td>17</td>
                          <td>
                            आर्मेचर शाफ्ट और इंफ्लेंजर के बीच इंटरफेरन्‍स |
                          </td>
                          <td>0.080 से 0.195 मी.मी.</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_17}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_17: e.target.value,
                                });
                                setVastvik_17(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>18</td>
                          <td>
                            बिअरींग
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;पी.ई.
                            <br></br>
                            <br></br>
                            <br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;सी.ई.
                          </td>
                          <td>
                            मेक
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.manak_18make01}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  manak_18make01: e.target.value,
                                });
                                setManak_18make01(e.target.value);
                              }}
                            ></input>
                            क्र.
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.manak_18no01}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  manak_18no01: e.target.value,
                                });
                                setManak_18no01(e.target.value);
                              }}
                            ></input>{" "}
                            <br></br>निर्मिती वर्ष
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.manak_18year01}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  manak_18year01: e.target.value,
                                });
                                setManak_18year01(e.target.value);
                              }}
                            ></input>{" "}
                            <br></br>(नया/पुराना)<br></br>
                            मेक
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.manak_18make02}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  manak_18make02: e.target.value,
                                });
                                setManak_18make02(e.target.value);
                              }}
                            ></input>
                            क्र.
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.manak_18no02}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  manak_18no02: e.target.value,
                                });
                                setManak_18no02(e.target.value);
                              }}
                            ></input>
                            <br></br> निर्मिती वर्ष
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.manak_18year02}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  manak_18year02: e.target.value,
                                });
                                setManak_18year02(e.target.value);
                              }}
                            ></input>{" "}
                            <br>(</br>नया/पुराना)
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_18}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_18: e.target.value,
                                });
                                setVastvik_18(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>19</td>
                          <td>
                            यदि बिअरिंग बदली करना हो तब<br></br>
                            (a)बिअरिंग इनर रेसर का डाया
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;पी.ई.
                            <br></br>
                            <br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;सी.ई.
                          </td>
                          <td>
                            140+0.0 मी.मी.<br></br>- 0.009 मी.मी.<br></br>
                            90 + 0.00 मी.मी.<br></br>- 0.009 मी.मी.
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_19a}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_19a: e.target.value,
                                });
                                setVastvik_19a(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            (b)शाफ्ट का बिअरिंग सीट डाया
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;पी.ई.
                            <br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;सी.ई.
                          </td>
                          <td>
                            140.043 से 140.068 मी.मी<br></br>
                            90.023 से 90.045 मी.मी
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_19b}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_19b: e.target.value,
                                });
                                setVastvik_19b(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>20</td>
                          <td>
                            स्‍वेल चेक करें
                            ।&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;पी.ई.
                            <br></br>
                            (संदर्भ :-MM-WAM4-Vol-II Pg TM29)
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;सी.ई.
                          </td>
                          <td>
                            0.033 - 0.066 मी.मी<br></br>
                            0.018 - 0.043मी.मी
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_20}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_20: e.target.value,
                                });
                                setVastvik_20(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>21</td>
                          <td>यदि बिअरिंग बदली करना हो तब</td>
                          <td></td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_21}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_21: e.target.value,
                                });
                                setVastvik_1(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            (a)एण्‍डशिल्‍डइनरबिअरिंगसीटडाया
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;पी.ई.
                            <br> </br>(संदर्भ.:- CLW Drg 1-TWD-092-006 Alt.8)
                            <br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;सी.ई.
                          </td>
                          <td>
                            300- 0.0<br></br>
                            -0.035<br></br>
                            190 + 0.025<br></br>
                            -0.035
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_21a}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_21a: e.target.value,
                                });
                                setVastvik_21a(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                  <br></br>
                </form>
              </section>
              <div style="height: 25px;"></div>

              <section className="container">
                <form>
                  <header className="header">
                    <h4 className="title">
                      TAO-659कर्षण मोटर ओवरहाल करने के लिये जॉंच पत्रक
                      <br></br>ब्रश होल्‍डर रिव्‍हाल्‍वींग रिंग के लिये
                      असेंब्‍ली पूर्व जॉंच पत्रक
                    </h4>
                  </header>
                  <div className="form-container">
                    <label htmlFor="Bhrrf">
                      बी.एच.आर.आर. अ.क्र. :-
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.bhrr1_no}
                        onChange={(e) => {
                          setData({ ...data, bhrr1_no: e.target.value });
                          setBhrr1_no(e.target.value);
                        }}
                      ></input>
                    </label>
                    <br></br>
                    <label htmlFor="oval_name_1">
                      ओवलहाल करने वाले का नाम :-
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.overhall1_name}
                        onChange={(e) => {
                          setData({ ...data, overhall1_name: e.target.value });
                          setOverhall1_name(e.target.value);
                        }}
                      ></input>{" "}
                    </label>
                    <label htmlFor="Date">
                      दिनांक –
                      <input
                        type="date"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.date_01}
                        onChange={(e) => {
                          setData({ ...data, date_01: e.target.value });
                          setDate_1(e.target.value);
                        }}
                      ></input>
                    </label>
                    <br></br>
                    <label htmlFor="oval_name_2">
                      प्रमाणित करने वाले का नाम :-
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.certified_name}
                        onChange={(e) => {
                          setData({ ...data, certified_name: e.target.value });
                          setCertified_name(e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                  <br> </br>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>अ.क्र</th>
                          <th>जॉंच / परीक्षण</th>
                          <th>मानक</th>
                          <th>वास्‍तविक</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            इन्‍सुलेटर का टाईटनेस सुनिश्चित करें ।<br></br>
                            (1) रॉकर रिंग पर<br></br>
                            (2)ब्रश होल्‍डर और इन्‍सुलेटर के बिच
                          </td>
                          <td>
                            15कि.ग्रा./मीटर टार्क<br></br>
                            15कि.ग्रा./मीटर टार्क
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_01}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_01: e.target.value,
                                });
                                setVastvik_01(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            लिडों का इन्‍सुलेटरों पर उचित टाईटनेस सुनिश्चित
                            करें।
                          </td>
                          <td>10 कि.ग्रा./मीटरटार्क</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_02}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_02: e.target.value,
                                });
                                setVastvik_02(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>1000 V मेगर से आई.आर.व्‍हॅल्‍यु जॉंच करें ।</td>
                          <td>10 MΩ</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_03}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_03: e.target.value,
                                });
                                setVastvik_03(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>बिएचआरआर का 3KV पर एचव्‍ही टेस्‍टकरें ।</td>
                          <td>लिकेज करंट 20 मीएम्‍प्‍स</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_04}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_04: e.target.value,
                                });
                                setVastvik_04(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            ब्रश होल्‍डर फीक्‍सींग बोल्‍ट का उचित टाईटनेस
                            सुनिश्चित करें ।
                          </td>
                          <td>16कि.ग्रा./मीटरटार्क</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_05}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_05: e.target.value,
                                });
                                setVastvik_05(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            आर्कहॉर्न गॅप और उनका उचित अलाइनमेंट (असेंब्‍ली के
                            दौरान){" "}
                          </td>
                          <td>10 मी.मी.±1 मी.मी.</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_06}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_06: e.target.value,
                                });
                                setVastvik_06(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th colSpan="7">
                            कॉम्‍यु.से ब्र.हो.गॅप :- 1.5 to 3.5मी.मी.<br></br>
                            स्प्रिंग टेंशन :- 2.4±10% kg नये ब्रश एवं :- 2.2 ±
                            10% kg पुराने ब्रश <br></br>
                            (संदर्भ :-MM-WAM4-Vol-II Pg TM-5)
                          </th>
                        </tr>
                        <tr>
                          <td></td>
                          <td>ब्रश हो 1</td>
                          <td>ब्रश हो 2</td>
                          <td>ब्रश हो 3</td>
                          <td>ब्रश हो 4</td>
                          <td>ब्रश हो 5</td>
                          <td>ब्रश हो 6</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>ब्रश हो. क्रमांक</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush1_no}
                              onChange={(e) => {
                                setData({ ...data, brush1_no: e.target.value });
                                setBrush1_no(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush2_no}
                              onChange={(e) => {
                                setData({ ...data, brush2_no: e.target.value });
                                setBrush2_no(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush3_no}
                              onChange={(e) => {
                                setData({ ...data, brush3_no: e.target.value });
                                setBrush3_no(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush4_no}
                              onChange={(e) => {
                                setData({ ...data, brush4_no: e.target.value });
                                setBrush4_no(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush5_no}
                              onChange={(e) => {
                                setData({ ...data, brush5_no: e.target.value });
                                setBrush5_no(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush6_no}
                              onChange={(e) => {
                                setData({ ...data, brush6_no: e.target.value });
                                setBrush6_no(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>ब्रश ग्रेड / बँच</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush1_grade}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush1_grade: e.target.value,
                                });
                                setBrush1_grade(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush2_grade}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush2_grade: e.target.value,
                                });
                                setBrush2_grade(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush3_grade}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush3_grade: e.target.value,
                                });
                                setBrush3_grade(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush4_grade}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush4_grade: e.target.value,
                                });
                                setBrush4_grade(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush5_grade}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush5_grade: e.target.value,
                                });
                                setBrush5_grade(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush6_grade}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush6_grade: e.target.value,
                                });
                                setBrush6_grade(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>कॉम्‍यु.से ब्रश हो गॅप वववगगग</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush1_gap}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush1_gap: e.target.value,
                                });
                                setBrush1_gap(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush2_gap}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush2_gap: e.target.value,
                                });
                                setBrush2_gap(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush3_gap}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush3_gap: e.target.value,
                                });
                                setBrush3_gap(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush4_gap}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush4_gap: e.target.value,
                                });
                                setBrush4_gap(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush5_gap}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush5_gap: e.target.value,
                                });
                                setBrush5_gap(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush6_gap}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush6_gap: e.target.value,
                                });
                                setBrush6_gap(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>ब्रश हो से राइझरगॅप</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush1_razorgap}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush1_razorgap: e.target.value,
                                });
                                setBrush1_razorgap(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush2_razorgap}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush2_razorgap: e.target.value,
                                });
                                setBrush2_razorgap(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush3_razorgap}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush3_razorgap: e.target.value,
                                });
                                setBrush3_razorgap(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush4_razorgap}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush4_razorgap: e.target.value,
                                });
                                setBrush4_razorgap(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush5_razorgap}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush5_razorgap: e.target.value,
                                });
                                setBrush5_razorgap(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush6_razorgap}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush6_razorgap: e.target.value,
                                });
                                setBrush6_razorgap(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            स्प्रिंग टेंशन&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; R
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush1_tension_r}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush1_tension_r: e.target.value,
                                });
                                setBrush1_tension_r(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush2_tension_r}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush2_tension_r: e.target.value,
                                });
                                setBrush2_tension_r(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                            ></input>
                          </td>
                          value={data.brush3_tension_r}
                          onChange=
                          {(e) => {
                            setData({
                              ...data,
                              brush3_tension_r: e.target.value,
                            });
                            setBrush3_tension_r(e.target.value);
                          }}
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush4_tension_r}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush4_tension_r: e.target.value,
                                });
                                setBrush4_tension_r(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush5_tension_r}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush5_tension_r: e.target.value,
                                });
                                setBrush5_tension_r(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush6_tension_r}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush6_tension_r: e.target.value,
                                });
                                setBrush6_tension_r(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                            ></input>
                          </td>
                          value={data.brush1_tension_m}
                          onChange=
                          {(e) => {
                            setData({
                              ...data,
                              brush1_tension_m: e.target.value,
                            });
                            setBrush1_tension_m(e.target.value);
                          }}
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush2_tension_m}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush2_tension_m: e.target.value,
                                });
                                setBrush2_tension_m(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush3_tension_m}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush3_tension_m: e.target.value,
                                });
                                setBrush3_tension_m(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush4_tension_m}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush4_tension_m: e.target.value,
                                });
                                setBrush4_tension_m(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush5_tension_m}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush5_tension_m: e.target.value,
                                });
                                setBrush5_tension_m(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush6_tension_m}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush6_tension_m: e.target.value,
                                });
                                setBrush6_tension_m(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush1_tension_v}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush1_tension_v: e.target.value,
                                });
                                setBrush1_tension_v(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush2_tension_v}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush2_tension_v: e.target.value,
                                });
                                setBrush2_tension_v(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush3_tension_v}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush3_tension_v: e.target.value,
                                });
                                setBrush3_tension_v(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush4_tension_v}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush4_tension_v: e.target.value,
                                });
                                setBrush4_tension_v(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush5_tension_v}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush5_tension_v: e.target.value,
                                });
                                setBrush5_tension_v(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.brush6_tension_v}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  brush6_tension_v: e.target.value,
                                });
                                setBrush6_tension_v(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                  <br></br>
                </form>
              </section>
              <div style="height: 25px;"></div>

              <section className="container">
                <form>
                  <header className="header">
                    <h4 className="title">
                      TAO-659कर्षण मोटर ओवरहाल करने के लिये जॉंच पत्रक
                      <br></br>असेंबल्‍ड मोटर के लिये जॉंच पत्रक
                    </h4>
                  </header>
                  <div className="form-container">
                    <label htmlFor="state_number">स्‍टेटर क्र.:-</label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.stator1_no}
                      onChange={(e) => {
                        setData({ ...data, stator1_no: e.target.value });
                        setStator1_no(e.target.value);
                      }}
                    ></input>

                    <label htmlFor="date">दिनांक:</label>
                    <input
                      type="date"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.date1}
                      onChange={(e) => {
                        setData({ ...data, date1: e.target.value });
                        setDate1(e.target.value);
                      }}
                    ></input>
                    <br></br>
                    <label htmlFor="armature_number">आर्मेचर क्र.:-</label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.armature_no1}
                      onChange={(e) => {
                        setData({ ...data, armature_no1: e.target.value });
                        setArmature_no1(e.target.value);
                      }}
                    ></input>

                    <br></br>
                    <label htmlFor="bhr_arr_number">बी.एच.आर.आर. क्र.:-</label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.bhrr_no1}
                      onChange={(e) => {
                        setData({ ...data, bhrr_no1: e.target.value });
                        setBhrr_no1(e.target.value);
                      }}
                    ></input>

                    <br></br>
                    <label htmlFor="assembler_name">
                      असेंब्‍ली करने वाले का नाम:-
                    </label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.assembly_name}
                      onChange={(e) => {
                        setData({ ...data, assembly_name: e.target.value });
                        setAssembly_name(e.target.value);
                      }}
                    ></input>

                    <label htmlFor="certifier_name">
                      प्रमाणित करने वाले का नाम :-
                    </label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.certified_1name}
                      onChange={(e) => {
                        setData({ ...data, certified_1name: e.target.value });
                        setCertified_1name(e.target.value);
                      }}
                    ></input>
                  </div>
                  <br></br>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>अ.क्र</th>
                          <th>जॉंच / परीक्षण</th>
                          <th>मानक</th>
                          <th>वास्‍तविक</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            आर्मेचर और पोल के बिच का रॅडीयल गॅप चेक करें ।
                            <br> </br>
                            मेन पोल <br></br>
                            इंटर पोल <br></br>
                            (संदर्भ :-MM-WAM4-Vol-II Pg TM-4)
                          </td>
                          <td>5.5± 0.3मी.मी. 6.0± 0.1 मी.मी.</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_1: e.target.value,
                                });
                                setVastveek_1(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            बिअरींग एवं रेसर के बिच डायमेट्रीकल <br></br>
                            क्लिअरन्‍स <br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;लगाने
                            से पहले <br> </br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;लगाने
                            से बाद<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;लगाने
                            से पहले<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;लगाने
                            से बाद<br></br>
                          </td>
                          <td>
                            0.145 to 0.190 मी.मी. 0.075 to 0.127 मी.मी. 0.105 to
                            0.140 मी.मी. 0.062 to 0.107 मी.मी.
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_2a}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_2a: e.target.value,
                                });
                                setVastveek_2a(e.target.value);
                              }}
                            ></input>
                            <br></br>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_2b}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_2b: e.target.value,
                                });
                                setVastveek_2b(e.target.value);
                              }}
                            ></input>
                            <br></br>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_2c}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_2c: e.target.value,
                                });
                                setVastveek_2c(e.target.value);
                              }}
                            ></input>
                            <br></br>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_2d}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_2d: e.target.value,
                                });
                                setVastveek_2d(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>1000V मेगर से आई.आर.व्‍हॅल्‍यु जॉंच करें </td>
                          <td>कम से कम 10 M Ω</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_3}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_3: e.target.value,
                                });
                                setVastveek_3(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            मोटर को चलाये और ओव्‍हॅलिटी जॉंच करें या प्रोफाइलरसे
                            काम्‍युटेटर प्रोफाल जॉंच करें
                          </td>
                          <td>
                            अधिकतम मर्यादा<br></br>
                            0.04मी.मी या<br></br>
                            एम.बी.टी.बी. 10 µ मी.<br></br>
                            टीआयआर30 µ मी.
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_4mm}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_4mm: e.target.value,
                                });
                                setVastveek_4mm(e.target.value);
                              }}
                            ></input>
                            मी.मी.<br></br>
                            एम.बी.टी.बी.
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_4mbtb}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_4mbtb: e.target.value,
                                });
                                setVastveek_4mbtb(e.target.value);
                              }}
                            ></input>
                            µमी<br></br>
                            टीआयआर
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_4tir}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_4tir: e.target.value,
                                });
                                setVastveek_4tir(e.target.value);
                              }}
                            ></input>
                            µमी
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            मोटर को दोनो दिशाओं में 895 आरपीएम पर<br></br>
                            (a) बिअरींग ध्‍वनी और एस.पी.एम.रिडींग <br></br>
                            <br></br>
                            <br></br>
                            (b) व्‍हायब्रेशन तथा बिअरींग की स्थिती जॉंच करें ।{" "}
                            <br></br>
                            (c) बिअरींग तापमान बढना जॉंच करें ।{" "}
                          </td>
                          <td>
                            पीला/हरापीला/हरा<br></br>
                            LR / HR LR/HR <br></br>
                            (20 dbn) (20 dbn)
                            <br></br>
                            <br></br>
                            Amb+25°C{" "}
                          </td>
                          <td>
                            पी.ई.
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_5pi}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_5pi: e.target.value,
                                });
                                setVastveek_5pi(e.target.value);
                              }}
                            ></input>{" "}
                            <br></br> सी.ई.
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_5si}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_5si: e.target.value,
                                });
                                setVastveek_5si(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                  <br></br>
                </form>
              </section>
              <div style="height: 25px;"></div>

              <section className="container">
                <form>
                  <header className="header">
                    <h4 className="title">
                      TAO-659कर्षण मोटर ओवरहाल करने के लिये जॉंच पत्रक
                      <br></br>पिनियन चढाने के लिये जॉंच पत्रक
                    </h4>
                  </header>
                  <div className="form-container">
                    <label htmlFor="name of Installing the Pinnacle">
                      पिनियन चढाने वाले का नामदिनांक:-
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.pinion_name}
                        onChange={(e) => {
                          setData({ ...data, pinion_name: e.target.value });
                          setPinion_name(e.target.value);
                        }}
                      ></input>
                    </label>
                    <label htmlFor="Date of Installing the Pinnacle">
                      दिनांक:-
                      <input
                        type="date"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.pinion_date}
                        onChange={(e) => {
                          setData({ ...data, pinion_date: e.target.value });
                          setPinion_date(e.target.value);
                        }}
                      ></input>
                    </label>
                    <br> </br>
                    <label htmlFor="Name of the Certifier">
                      प्रमाणित करने वाले का नाम:-
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.certified_2name}
                        onChange={(e) => {
                          setData({ ...data, certified_2name: e.target.value });
                          setCertified_2name(e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                  <br> </br>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>अ.क्र</th>
                          <th>जॉंच / परीक्षण</th>
                          <th>मानक</th>
                          <th>वास्‍तविक</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>पिनियन का मेक, क्र. और निर्मिती वर्ष </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_01}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_01: e.target.value,
                                });
                                setVastveek_01(e.target.value);
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>पिनियन का RDPT/MPT करना ।</td>
                          <td>किया </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_02}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_02: e.target.value,
                                });
                                setVastveek_02(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            पिनियन टिथ की K व्‍हॅल्‍यु (15 टिथ) <br></br>
                            (संदर्भ :- RDSO Drg- DDO-296 Alt-e)
                          </td>
                          <td>3 टिथ के बिच 95.713 to 95.589 मी.मी</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_03}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_03: e.target.value,
                                });
                                setVastveek_03(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>पिनियन टिथ की P व्‍हॅल्‍यु</td>
                          <td>0.4 mm max</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_04}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_04: e.target.value,
                                });
                                setVastveek_04(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>पिनियन बेडिंग चेक करें । </td>
                          <td> 85% से ज्‍यादा </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_05}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_05: e.target.value,
                                });
                                setVastveek_05(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            पिनियन एडव्‍हासमेन्‍ट ( पिनियन का चल अंतर )<br></br>
                            (a)ठंडी अवस्‍था में पिनियन के फ्रंट एंड से शाप-ट के
                            फ्रंट एंड तक का अंतर
                            <br></br>
                            (b)श्रिंक फीट के बाद पिनियन के फ्रंट एंड से शाप-ट के
                            फ्रंट एंड तक का अंतर
                            <br></br>(Ref- WAM4 MM-V-II Pg TM33)
                          </td>
                          <td>
                            (a-b)= 1.9 to 2.2 मी.मी.<br></br>
                            पिनियन का तापमान 180 ± 10° c <br> </br>
                            (कमरे के तापमानसहीत)
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_06a}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_06a: e.target.value,
                                });
                                setVastveek_06a(e.target.value);
                              }}
                            ></input>
                            <br></br>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_06b}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_06b: e.target.value,
                                });
                                setVastveek_06b(e.target.value);
                              }}
                            ></input>
                            <br></br>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastveek_06c}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastveek_06c: e.target.value,
                                });
                                setVastveek_06c(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                  <br></br>
                </form>
              </section>
              <div style="height: 25px;"></div>

              <section className="container">
                <form>
                  <header className="header">
                    <h4 className="title">मस्ट चेंज आयटम फॉर टाव-659 टि.एम</h4>
                  </header>
                  <br> </br>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>अ.क्र</th>
                          <th>विवरण्</th>
                          <th>पि.एल नंबर्</th>
                          <th>बदली किया / नही किया</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Set of rubber items</td>
                          <td>25.25.9787</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.change_01}
                              onChange={(e) => {
                                setData({ ...data, change_01: e.target.value });
                                setChange_01(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Weraing plate or Liner</td>
                          <td>25.94.6456</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.change_02}
                              onChange={(e) => {
                                setData({ ...data, change_02: e.target.value });
                                setChange_02(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Teflon ring for Hitachi TM armature</td>
                          <td>25.37.8211</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.change_03}
                              onChange={(e) => {
                                setData({ ...data, change_03: e.target.value });
                                setChange_03(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Set of Lock plate</td>
                          <td>25.94.9706</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.change_04}
                              onChange={(e) => {
                                setData({ ...data, change_04: e.target.value });
                                setChange_04(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Carbon brush </td>
                          <td>47.41.3657</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.change_05}
                              onChange={(e) => {
                                setData({ ...data, change_05: e.target.value });
                                setChange_05(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Split pin 3.2x32 mm</td>
                          <td>N/S</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.change_06}
                              onChange={(e) => {
                                setData({ ...data, change_06: e.target.value });
                                setChange_06(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Split pin 2.5 mm</td>
                          <td>N/S</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.change_07}
                              onChange={(e) => {
                                setData({ ...data, change_07: e.target.value });
                                setChange_07(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>‘E’ type Circlip</td>
                          <td>N/S</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.change_08}
                              onChange={(e) => {
                                setData({ ...data, change_08: e.target.value });
                                setChange_08(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <label
                      htmlFor="तकनिशियन"
                      className="form-label custom-label"
                    >
                      <span style={{ whiteSpace: "pre" }}>
                        तकनिशियन का ID:{" "}
                      </span>
                    </label>
                    <input
                      type="text"
                      className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                      placeholder="ID"
                      aria-label="ID"
                      required
                      value={data.uid}
                      onChange={(e) => {
                        setData({ ...data, uid: e.target.value });
                      }}
                    ></input>
                  </div>
                  <br></br>
                  <br></br>
                </form>
              </section>

              <br></br>
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-500 py-2 px-8 rounded shadow border-2  border-blue-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview from
              </button>
              <button
                className="bg-yellow-400 py-2 px-8 rounded shadow border-2 border-yellow-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </body>
          </>
        )}
      </main>
    </>
  );
}

export default RevertHistoryInputFieldTAO;
