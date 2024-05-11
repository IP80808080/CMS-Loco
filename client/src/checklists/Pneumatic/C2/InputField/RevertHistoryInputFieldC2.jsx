import { useState, useEffect } from "react";
import Details from "../Template/details";
import Table from "../Template/table";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import Footer from "../Template/footer";
import "./c2index.css";
import { BASE_URL } from "../../../../config";

function RevertHistoryInputFieldC2() {
  const [uid, setUID] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [bsl, setBsl] = useState("");
  const [equipmentNumber, setEquipmentNumber] = useState("");
  const [make, setMake] = useState("");
  const [mfg, setMfg] = useState("");
  const [date_1, setDate_1] = useState("");
  const [date_2, setDate_2] = useState("");
  const [date_3, setDate_3] = useState("");
  const [date_4, setDate_4] = useState("");
  const [date_5, setDate_5] = useState("");
  const [date_6, setDate_6] = useState("");
  const [date_7, setDate_7] = useState("");
  const [date_8, setDate_8] = useState("");
  const [date_9, setDate_9] = useState("");
  const [date_10, setDate_10] = useState("");
  const [date_11, setDate_11] = useState("");
  const [date_12, setDate_12] = useState("");
  const [loco_no_1, setLoco_no_1] = useState("");
  const [loco_no_2, setLoco_no_2] = useState("");
  const [loco_no_3, setLoco_no_3] = useState("");
  const [loco_no_4, setLoco_no_4] = useState("");
  const [loco_no_5, setLoco_no_5] = useState("");
  const [loco_no_6, setLoco_no_6] = useState("");
  const [loco_no_7, setLoco_no_7] = useState("");
  const [loco_no_8, setLoco_no_8] = useState("");
  const [loco_no_9, setLoco_no_9] = useState("");
  const [loco_no_10, setLoco_no_10] = useState("");
  const [loco_no_11, setLoco_no_11] = useState("");
  const [loco_no_12, setLoco_no_12] = useState("");
  const [reason_1, setReason_1] = useState("");
  const [reason_2, setReason_2] = useState("");
  const [reason_3, setReason_3] = useState("");
  const [reason_4, setReason_4] = useState("");
  const [reason_5, setReason_5] = useState("");
  const [reason_6, setReason_6] = useState("");
  const [reason_7, setReason_7] = useState("");
  const [reason_8, setReason_8] = useState("");
  const [reason_9, setReason_9] = useState("");
  const [reason_10, setReason_10] = useState("");
  const [reason_11, setReason_11] = useState("");
  const [reason_12, setReason_12] = useState("");
  const [defect_1, setDefect_1] = useState("");
  const [defect_2, setDefect_2] = useState("");
  const [defect_3, setDefect_3] = useState("");
  const [defect_4, setDefect_4] = useState("");
  const [defect_5, setDefect_5] = useState("");
  const [defect_6, setDefect_6] = useState("");
  const [defect_7, setDefect_7] = useState("");
  const [defect_8, setDefect_8] = useState("");
  const [defect_9, setDefect_9] = useState("");
  const [defect_10, setDefect_10] = useState("");
  const [defect_11, setDefect_11] = useState("");
  const [defect_12, setDefect_12] = useState("");
  const [date_OH_1, setDate_OH_1] = useState("");
  const [date_OH_2, setDate_OH_2] = useState("");
  const [date_OH_3, setDate_OH_3] = useState("");
  const [date_OH_4, setDate_OH_4] = useState("");
  const [date_OH_5, setDate_OH_5] = useState("");
  const [date_OH_6, setDate_OH_6] = useState("");
  const [date_OH_7, setDate_OH_7] = useState("");
  const [date_OH_8, setDate_OH_8] = useState("");
  const [date_OH_9, setDate_OH_9] = useState("");
  const [date_OH_10, setDate_OH_10] = useState("");
  const [date_OH_11, setDate_OH_11] = useState("");
  const [date_OH_12, setDate_OH_12] = useState("");
  const [oh_1, setOh_1] = useState("");
  const [oh_2, setOh_2] = useState("");
  const [oh_3, setOh_3] = useState("");
  const [oh_4, setOh_4] = useState("");
  const [oh_5, setOh_5] = useState("");
  const [oh_6, setOh_6] = useState("");
  const [oh_7, setOh_7] = useState("");
  const [oh_8, setOh_8] = useState("");
  const [oh_9, setOh_9] = useState("");
  const [oh_10, setOh_10] = useState("");
  const [oh_11, setOh_11] = useState("");
  const [of_12, setOf_12] = useState("");
  const [c_12, setC_12] = useState("");
  const [cb_12, setCb_12] = useState("");
  const [free_1, setFree_1] = useState("");
  const [free_2, setFree_2] = useState("");
  const [free_3, setFree_3] = useState("");
  const [free_4, setFree_4] = useState("");
  const [free_5, setFree_5] = useState("");
  const [free_6, setFree_6] = useState("");
  const [free_7, setFree_7] = useState("");
  const [free_8, setFree_8] = useState("");
  const [free_9, setFree_9] = useState("");
  const [free_10, setFree_10] = useState("");
  const [free_11, setFree_11] = useState("");

  const [condition_1, setCondition_1] = useState("");
  const [condition_2, setCondition_2] = useState("");
  const [condition_3, setCondition_3] = useState("");
  const [condition_4, setCondition_4] = useState("");
  const [condition_5, setCondition_5] = useState("");
  const [condition_6, setCondition_6] = useState("");
  const [condition_7, setCondition_7] = useState("");
  const [condition_8, setCondition_8] = useState("");
  const [condition_9, setCondition_9] = useState("");
  const [condition_10, setCondition_10] = useState("");
  const [condition_11, setCondition_11] = useState("");

  const [cleaning_1, setCleaning_1] = useState("");
  const [cleaning_2, setCleaning_2] = useState("");
  const [cleaning_3, setCleaning_3] = useState("");
  const [cleaning_4, setCleaning_4] = useState("");
  const [cleaning_5, setCleaning_5] = useState("");
  const [cleaning_6, setCleaning_6] = useState("");
  const [cleaning_7, setCleaning_7] = useState("");
  const [cleaning_8, setCleaning_8] = useState("");
  const [cleaning_9, setCleaning_9] = useState("");
  const [cleaning_10, setCleaning_10] = useState("");
  const [cleaning_11, setCleaning_11] = useState("");

  const [body_1, setBody_1] = useState("");
  const [body_2, setBody_2] = useState("");
  const [body_3, setBody_3] = useState("");
  const [body_4, setBody_4] = useState("");
  const [body_5, setBody_5] = useState("");
  const [body_6, setBody_6] = useState("");
  const [body_7, setBody_7] = useState("");
  const [body_8, setBody_8] = useState("");
  const [body_9, setBody_9] = useState("");
  const [body_10, setBody_10] = useState("");
  const [body_11, setBody_11] = useState("");

  const [provided_1, setProvided_1] = useState("");
  const [provided_2, setProvided_2] = useState("");
  const [provided_3, setProvided_3] = useState("");
  const [provided_4, setProvided_4] = useState("");
  const [provided_5, setProvided_5] = useState("");
  const [provided_6, setProvided_6] = useState("");
  const [provided_7, setProvided_7] = useState("");
  const [provided_8, setProvided_8] = useState("");
  const [provided_9, setProvided_9] = useState("");
  const [provided_10, setProvided_10] = useState("");
  const [provided_11, setProvided_11] = useState("");
  const [provided_12, setProvided_12] = useState("");
  const [apply_pressure_1, setApply_pressure_1] = useState("");
  const [apply_pressure_2, setApply_pressure_2] = useState("");
  const [apply_pressure_3, setApply_pressure_3] = useState("");
  const [apply_pressure_4, setApply_pressure_4] = useState("");
  const [apply_pressure_5, setApply_pressure_5] = useState("");
  const [apply_pressure_6, setApply_pressure_6] = useState("");
  const [apply_pressure_7, setApply_pressure_7] = useState("");
  const [apply_pressure_8, setApply_pressure_8] = useState("");
  const [apply_pressure_9, setApply_pressure_9] = useState("");
  const [apply_pressure_10, setApply_pressure_10] = useState("");
  const [apply_pressure_11, setApply_pressure_11] = useState("");
  const [apply_3_1, setApply_3_1] = useState("");
  const [apply_3_2, setApply_3_2] = useState("");
  const [apply_3_3, setApply_3_3] = useState("");
  const [apply_3_4, setApply_3_4] = useState("");
  const [apply_3_5, setApply_3_5] = useState("");
  const [apply_3_6, setApply_3_6] = useState("");
  const [apply_3_7, setApply_3_7] = useState("");
  const [apply_3_8, setApply_3_8] = useState("");
  const [apply_3_9, setApply_3_9] = useState("");
  const [apply_3_10, setApply_3_10] = useState("");
  const [apply_3_11, setApply_3_11] = useState("");
  const [leakage_1, setLeakage_1] = useState("");
  const [leakage_2, setLeakage_2] = useState("");
  const [leakage_3, setLeakage_3] = useState("");
  const [leakage_4, setLeakage_4] = useState("");
  const [leakage_5, setLeakage_5] = useState("");
  const [leakage_6, setLeakage_6] = useState("");
  const [leakage_7, setLeakage_7] = useState("");
  const [leakage_8, setLeakage_8] = useState("");
  const [leakage_9, setLeakage_9] = useState("");
  const [leakage_10, setLeakage_10] = useState("");
  const [leakage_11, setLeakage_11] = useState("");
  const [provided_in_loco_1, setProvided_in_loco_1] = useState("");
  const [provided_in_loco_2, setProvided_in_loco_2] = useState("");
  const [provided_in_loco_3, setProvided_in_loco_3] = useState("");
  const [provided_in_loco_4, setProvided_in_loco_4] = useState("");
  const [provided_in_loco_5, setProvided_in_loco_5] = useState("");
  const [provided_in_loco_6, setProvided_in_loco_6] = useState("");
  const [provided_in_loco_7, setProvided_in_loco_7] = useState("");
  const [provided_in_loco_8, setProvided_in_loco_8] = useState("");
  const [provided_in_loco_9, setProvided_in_loco_9] = useState("");
  const [provided_in_loco_10, setProvided_in_loco_10] = useState("");
  const [provided_in_loco_11, setProvided_in_loco_11] = useState("");

  const [technician_sign_1, setTechnician_sign_1] = useState("");
  const [technician_sign_2, setTechnician_sign_2] = useState("");
  const [technician_sign_3, setTechnician_sign_3] = useState("");
  const [technician_sign_4, setTechnician_sign_4] = useState("");
  const [technician_sign_5, setTechnician_sign_5] = useState("");
  const [technician_sign_6, setTechnician_sign_6] = useState("");
  const [technician_sign_7, setTechnician_sign_7] = useState("");
  const [technician_sign_8, setTechnician_sign_8] = useState("");
  const [technician_sign_9, setTechnician_sign_9] = useState("");
  const [technician_sign_10, setTechnician_sign_10] = useState("");
  const [technician_sign_11, setTechnician_sign_11] = useState("");

  const [supervisior_sign_1, setSupervisior_sign_1] = useState("");
  const [supervisior_sign_2, setSupervisior_sign_2] = useState("");
  const [supervisior_sign_3, setSupervisior_sign_3] = useState("");
  const [supervisior_sign_4, setSupervisior_sign_4] = useState("");
  const [supervisior_sign_5, setSupervisior_sign_5] = useState("");
  const [supervisior_sign_6, setSupervisior_sign_6] = useState("");
  const [supervisior_sign_7, setSupervisior_sign_7] = useState("");
  const [supervisior_sign_8, setSupervisior_sign_8] = useState("");
  const [supervisior_sign_9, setSupervisior_sign_9] = useState("");
  const [supervisior_sign_10, setSupervisior_sign_10] = useState("");
  const [supervisior_sign_11, setSupervisior_sign_11] = useState("");

  const handlePrint = () => {
    window.print();
  };

  const navigate = useNavigate();
  const [data, setData] = useState({
    uid: "",
    bsl: "",
    equipmentNumber: "",
    mfg: "",
    make: "",
    date_1: "",
    date_2: "",
    date_3: "",
    date_4: "",
    date_5: "",
    date_6: "",
    date_7: "",
    date_8: "",
    date_9: "",
    date_10: "",
    date_11: "",
    date_12: "",
    loco_no_1: "",
    loco_no_2: "",
    loco_no_3: "",
    loco_no_4: "",
    loco_no_5: "",
    loco_no_6: "",
    loco_no_7: "",
    loco_no_8: "",
    loco_no_9: "",
    loco_no_10: "",
    loco_no_11: "",
    loco_no_12: "",
    reason_1: "",
    reason_2: "",
    reason_3: "",
    reason_4: "",
    reason_5: "",
    reason_6: "",
    reason_7: "",
    reason_8: "",
    reason_9: "",
    reason_10: "",
    reason_11: "",
    reason_12: "",
    defect_1: "",
    defect_2: "",
    defect_3: "",
    defect_4: "",
    defect_5: "",
    defect_6: "",
    defect_7: "",
    defect_8: "",
    defect_9: "",
    defect_10: "",
    defect_11: "",
    defect_12: "",
    date_OH_1: "",
    date_OH_2: "",
    date_OH_3: "",
    date_OH_4: "",
    date_OH_5: "",
    date_OH_6: "",
    date_OH_7: "",
    date_OH_8: "",
    date_OH_9: "",
    date_OH_10: "",
    date_OH_11: "",
    date_OH_12: "",
    oh_1: "",
    oh_2: "",
    oh_3: "",
    oh_4: "",
    oh_5: "",
    oh_6: "",
    oh_7: "",
    oh_8: "",
    oh_9: "",
    oh_10: "",
    oh_11: "",
    of_12: "",
    c_12: "",
    cb_12: "",

    free_1: "",
    free_2: "",
    free_3: "",
    free_4: "",
    free_5: "",
    free_6: "",
    free_7: "",
    free_8: "",
    free_9: "",
    free_10: "",
    free_11: "",

    condition_1: "",
    condition_2: "",
    condition_3: "",
    condition_4: "",
    condition_5: "",
    condition_6: "",
    condition_7: "",
    condition_8: "",
    condition_9: "",
    condition_10: "",
    condition_11: "",

    cleaning_1: "",
    cleaning_2: "",
    cleaning_3: "",
    cleaning_4: "",
    cleaning_5: "",
    cleaning_6: "",
    cleaning_7: "",
    cleaning_8: "",
    cleaning_9: "",
    cleaning_10: "",
    cleaning_11: "",

    body_1: "",
    body_2: "",
    body_3: "",
    body_4: "",
    body_5: "",
    body_6: "",
    body_7: "",
    body_8: "",
    body_9: "",
    body_10: "",
    body_11: "",

    provided_1: "",
    provided_2: "",
    provided_3: "",
    provided_4: "",
    provided_5: "",
    provided_6: "",
    provided_7: "",
    provided_8: "",
    provided_9: "",
    provided_10: "",
    provided_11: "",
    provided_12: "",
    //CHECKSHEET SECOND PAGE STARTED
    apply_pressure_1: "",
    apply_pressure_2: "",
    apply_pressure_3: "",
    apply_pressure_4: "",
    apply_pressure_5: "",
    apply_pressure_6: "",
    apply_pressure_7: "",
    apply_pressure_8: "",
    apply_pressure_9: "",
    apply_pressure_10: "",
    apply_pressure_11: "",

    apply_3_1: "",
    apply_3_2: "",
    apply_3_3: "",
    apply_3_4: "",
    apply_3_5: "",
    apply_3_6: "",
    apply_3_7: "",
    apply_3_8: "",
    apply_3_9: "",
    apply_3_10: "",
    apply_3_11: "",

    leakage_1: "",
    leakage_2: "",
    leakage_3: "",
    leakage_4: "",
    leakage_5: "",
    leakage_6: "",
    leakage_7: "",
    leakage_8: "",
    leakage_9: "",
    leakage_10: "",
    leakage_11: "",

    provided_in_loco_1: "",
    provided_in_loco_2: "",
    provided_in_loco_3: "",
    provided_in_loco_4: "",
    provided_in_loco_5: "",
    provided_in_loco_6: "",
    provided_in_loco_7: "",
    provided_in_loco_8: "",
    provided_in_loco_9: "",
    provided_in_loco_10: "",
    provided_in_loco_11: "",

    technician_sign_1: "",
    technician_sign_2: "",
    technician_sign_3: "",
    technician_sign_4: "",
    technician_sign_5: "",
    technician_sign_6: "",
    technician_sign_7: "",
    technician_sign_8: "",
    technician_sign_9: "",
    technician_sign_10: "",
    technician_sign_11: "",

    supervisior_sign_1: "",
    supervisior_sign_2: "",
    supervisior_sign_3: "",
    supervisior_sign_4: "",
    supervisior_sign_5: "",
    supervisior_sign_6: "",
    supervisior_sign_7: "",
    supervisior_sign_8: "",
    supervisior_sign_9: "",
    supervisior_sign_10: "",
    supervisior_sign_11: "",
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/revert/Au-mrb/${uid}`);
      const fetchedData = response.data; // Assuming response.data contains the fetched data
      setData({
        equipmentNumber: fetchedData.equipmentNumber,
        commissioningDate: fetchedData.commissioningDate,
        motor_no: fetchedData.motor_no,
        mek1: fetchedData.mek1,
        productionDate: fetchedData.productionDate,
        vastvik: fetchedData.vastvik,
        vastvik1: fetchedData.vastvik1,
        manak3: fetchedData.manak3,
        uv: fetchedData.uv,
        vw: fetchedData.vw,
        wu: fetchedData.wu,
        vastvik4: fetchedData.vastvik4,
        uv5: fetchedData.uv5,
        vw5: fetchedData.vw5,
        wu5: fetchedData.wu5,
        vastvik6: fetchedData.vastvik6,
        vastvik7: fetchedData.vastvik7,
        vastvik8: fetchedData.vastvik8,
        vastvik9: fetchedData.vastvik9,
        vastvik10: fetchedData.vastvik10,
        vastvik11: fetchedData.vastvik11,
        vastvik11_1: fetchedData.vastvik11_1,
        vastvik12: fetchedData.vastvik12,
        vastvik13: fetchedData.vastvik13,
        vastvik14: fetchedData.vastvik14,
        uv15: fetchedData.uv15,
        vw15: fetchedData.vw15,
        wu15: fetchedData.wu15,
        uv15_1: fetchedData.uv15_1,
        vw15_1: fetchedData.vw15_1,
        wu15_1: fetchedData.wu15_1,
        de: fetchedData.de,
        nde: fetchedData.nde,
        de_17: fetchedData.de_17,
        Body: fetchedData.Body,
        nde_17: fetchedData.nde_17,
        vastvik_18: fetchedData.vastvik_18,
        tarik_18: fetchedData.tarik_18,
        tarik_18_1: fetchedData.tarik_18_1,
        tarik_18_2: fetchedData.tarik_18_2,
        vastvik_18_2: fetchedData.vastvik_18_2,
        vastvik19: fetchedData.vastvik19,
        manak20: fetchedData.manak20,
        vastvik20: fetchedData.vastvik20,
        mek2: fetchedData.mek2,
        manak_18: fetchedData.manak_18,
        manak_18_1: fetchedData.manak_18_1,
        manak_18_2: fetchedData.manak_18_2,
        uid: fetchedData.uid,
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
      equipmentNumber,
      uid,
      bsl,
      make,
      mfg,
      date_1,
      date_2,
      date_3,
      date_4,
      date_5,
      date_6,
      date_7,
      date_8,
      date_9,
      date_10,
      date_11,
      date_12,
      loco_no_1,
      loco_no_2,
      loco_no_3,
      loco_no_4,
      loco_no_5,
      loco_no_6,
      loco_no_7,
      loco_no_8,
      loco_no_9,
      loco_no_10,
      loco_no_11,
      loco_no_12,
      reason_1,
      reason_2,
      reason_3,
      reason_4,
      reason_5,
      reason_6,
      reason_7,
      reason_8,
      reason_9,
      reason_10,
      reason_11,
      reason_12,
      defect_1,
      defect_2,
      defect_3,
      defect_4,
      defect_5,
      defect_6,
      defect_7,
      defect_8,
      defect_9,
      defect_10,
      defect_11,
      defect_12,
      date_OH_1,
      date_OH_2,
      date_OH_3,
      date_OH_4,
      date_OH_5,
      date_OH_6,
      date_OH_7,
      date_OH_8,
      date_OH_9,
      date_OH_10,
      date_OH_11,
      date_OH_12,
      oh_1,
      oh_2,
      oh_3,
      oh_4,
      oh_5,
      oh_6,
      oh_7,
      oh_8,
      oh_9,
      oh_10,
      oh_11,
      of_12,
      cb_12,
      c_12,
      free_1,
      free_2,
      free_3,
      free_4,
      free_5,
      free_6,
      free_7,
      free_8,
      free_9,
      free_10,
      free_11,

      condition_1,
      condition_2,
      condition_3,
      condition_4,
      condition_5,
      condition_6,
      condition_7,
      condition_8,
      condition_9,
      condition_10,
      condition_11,

      cleaning_1,
      cleaning_2,
      cleaning_3,
      cleaning_4,
      cleaning_5,
      cleaning_6,
      cleaning_7,
      cleaning_8,
      cleaning_9,
      cleaning_10,
      cleaning_11,

      body_1,
      body_2,
      body_3,
      body_4,
      body_5,
      body_6,
      body_7,
      body_8,
      body_9,
      body_10,
      body_11,

      provided_1,
      provided_2,
      provided_3,
      provided_4,
      provided_5,
      provided_6,
      provided_7,
      provided_8,
      provided_9,
      provided_10,
      provided_11,
      provided_12,

      apply_pressure_1,
      apply_pressure_2,
      apply_pressure_3,
      apply_pressure_4,
      apply_pressure_5,
      apply_pressure_6,
      apply_pressure_7,
      apply_pressure_8,
      apply_pressure_9,
      apply_pressure_10,
      apply_pressure_11,

      apply_3_1,
      apply_3_2,
      apply_3_3,
      apply_3_4,
      apply_3_5,
      apply_3_6,
      apply_3_7,
      apply_3_8,
      apply_3_9,
      apply_3_10,
      apply_3_11,

      leakage_1,
      leakage_2,
      leakage_3,
      leakage_4,
      leakage_5,
      leakage_6,
      leakage_7,
      leakage_8,
      leakage_9,
      leakage_10,
      leakage_11,

      provided_in_loco_1,
      provided_in_loco_2,
      provided_in_loco_3,
      provided_in_loco_4,
      provided_in_loco_5,
      provided_in_loco_6,
      provided_in_loco_7,
      provided_in_loco_8,
      provided_in_loco_9,
      provided_in_loco_10,
      provided_in_loco_11,

      technician_sign_1,
      technician_sign_2,
      technician_sign_3,
      technician_sign_4,
      technician_sign_5,
      technician_sign_6,
      technician_sign_7,
      technician_sign_8,
      technician_sign_9,
      technician_sign_10,
      technician_sign_11,

      supervisior_sign_1,
      supervisior_sign_2,
      supervisior_sign_3,
      supervisior_sign_4,
      supervisior_sign_5,
      supervisior_sign_6,
      supervisior_sign_7,
      supervisior_sign_8,
      supervisior_sign_9,
      supervisior_sign_10,
      supervisior_sign_11,
    } = data;
    try {
      const { data } = await axios.post(`${BASE_URL}/api/resubmit/C2`, {
        equipmentNumber,
        commissioningDate,
        motor_no,
        mek1,
        productionDate,
        vastvik,
        vastvik1,
        manak3,
        uv,
        vw,
        wu,
        vastvik4,
        uv5,
        vw5,
        wu5,
        vastvik6,
        vastvik7,
        vastvik8,
        vastvik9,
        vastvik10,
        vastvik11,
        vastvik11_1,
        vastvik12,
        vastvik13,
        vastvik14,
        uv15,
        vw15,
        wu15,
        uv15_1,
        vw15_1,
        wu15_1,
        de,
        nde,
        de_17,
        Body,
        nde_17,
        vastvik_18,
        tarik_18,
        tarik_18_1,
        tarik_18_2,
        vastvik_18_2,
        vastvik19,
        manak20,
        vastvik20,
        mek2,
        manak_18,
        manak_18_1,
        manak_18_2,
        uid,
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
      toast.error("Error during checklist submission");
    }
  };

  function formatDateString(inputDate) {
    return new Date(inputDate).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  }

  return (
    <>
      <main className="m-5 p-5 xl:max-w-8xl xl:mx-auto bg-white rounded shadow overflow-x-auto">
        {showForm ? (
          <div>
            <div className="flex flex-col justify-center px-8">
              <Details
                formatDateString={formatDateString}
                equipmentNumber={equipmentNumber}
                mek2={mek2}
                motor_no={motor_no}
                commissioningDate={commissioningDate}
                productionDate={productionDate}
                mek1={mek1}
              />
              <br></br>

              <Table
                productionDate={productionDate}
                vastvik={vastvik}
                vastvik1={vastvik1}
                manak3={manak3}
                uv={uv}
                vw={vw}
                wu={wu}
                vastvik4={vastvik4}
                uv5={uv5}
                vw5={vw5}
                wu5={wu5}
                vastvik6={vastvik6}
                vastvik7={vastvik7}
                vastvik8={vastvik8}
                vastvik9={vastvik9}
                vastvik10={vastvik10}
                vastvik11={vastvik11}
                vastvik11_1={vastvik11_1}
                vastvik12={vastvik12}
                vastvik13={vastvik13}
                vastvik14={vastvik14}
                uv15={uv15}
                vw15={vw15}
                wu15={wu15}
                uv15_1={uv15_1}
                vw15_1={vw15_1}
                wu15_1={wu15_1}
                de={de}
                nde={nde}
                de_17={de_17}
                Body={Body}
                nde_17={nde_17}
                vastvik_18={vastvik_18}
                tarik_18={tarik_18}
                tarik_18_1={tarik_18_1}
                tarik_18_2={tarik_18_2}
                vastvik_18_2={vastvik_18_2}
                vastvik19={vastvik19}
                manak20={manak20}
                vastvik20={vastvik20}
                manak_18={manak_18}
                manak_18_1={manak_18_1}
                manak_18_2={manak_18_2}
              />

              <Footer sign={sign} uid={uid} handlePrint={handlePrint} />
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
            <div className="flex flex-col justify-center container overflow-x">
              <div className="text-center">
                <header>
                  <h1 className="custom-font-size">
                    <p className="custom-font-size-sm">
                      विद्युत लोको शेड, भुसावल/मध्य रेल
                    </p>
                    <p className="custom-font-size">
                      ELECTRIC LOCO SHED, BSL/C.R.
                    </p>
                    <u>
                      <p className="custom-font-size-sm">
                        चेक शीट एम.आर.बी के लिए (CHECK SHEET FOR MRB)
                      </p>
                    </u>
                  </h1>
                </header>
              </div>

              <div className="container grid justify-center">
                <div className="container mt-5">
                  <div className="grid grid-cols-3 gap-4 px-8">
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="उपकरण नंबर"
                        className="col-form-label custom-label"
                      >
                        <span style={{ whiteSpace: "pre" }}>उपकरण नंबर: </span>
                      </label>
                      <input
                        id="उपकरण नंबर"
                        type="text"
                        className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                        placeholder="उपकरण नंबर"
                        aria-label="उपकरण नंबर"
                        value={data.equipmentNumber}
                        onChange={(e) => {
                          setData({ ...data, equipmentNumber: e.target.value });
                          setEquipmentNumber(e.target.value);
                        }}
                      ></input>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="मेकa"
                        className="col-form-label custom-label"
                      >
                        <span style={{ whiteSpace: "pre" }}>मेक: </span>
                      </label>
                      <input
                        id="मेकa"
                        type="text"
                        className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                        placeholder="मेक"
                        aria-label="मेक"
                        value={data.mek1}
                        onChange={(e) => {
                          setData({ ...data, mek1: e.target.value });
                          setMek1(e.target.value);
                        }}
                      ></input>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="कमिशनींग दिनांक"
                        className="col-form-label custom-label"
                      >
                        <span style={{ whiteSpace: "pre" }}>
                          कमिशनींग दिनांक:{" "}
                        </span>
                      </label>
                      <input
                        id="कमिशनींग दिनांक"
                        type="date"
                        className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                        placeholder="कमिशनींग दिनांक"
                        aria-label="कमिशनींग दिनांक"
                        value={data.commissioningDate}
                        onChange={(e) => {
                          setData({
                            ...data,
                            commissioningDate: e.target.value,
                          });
                          setcommissioningDate(e.target.value); // Make sure to have a state variable and setter for commissioningDate
                        }}
                      ></input>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="मोटर नंबर"
                        className="col-form-label custom-label"
                      >
                        <span style={{ whiteSpace: "pre" }}>मोटर नंबर: </span>
                      </label>
                      <input
                        id="मोटर नंबर"
                        type="text"
                        className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                        placeholder="मोटर नंबर"
                        aria-label="मोटर नंबर"
                        value={data.motor_no}
                        onChange={(e) => {
                          setData({ ...data, motor_no: e.target.value });
                          setMotor_no(e.target.value);
                        }}
                      ></input>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="मेकb"
                        className="col-form-label custom-label"
                      >
                        <span style={{ whiteSpace: "pre" }}>मेक: </span>
                      </label>
                      <input
                        id="मेकb"
                        type="text"
                        className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                        placeholder="मेक"
                        aria-label="मेक"
                        value={data.mek2}
                        onChange={(e) => {
                          setData({ ...data, mek2: e.target.value });
                          setMek2(e.target.value);
                        }}
                      ></input>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="निर्मिती दिनांक"
                        className="col-form-label custom-label"
                      >
                        <span style={{ whiteSpace: "pre" }}>
                          निर्मिती दिनांक:{" "}
                        </span>
                      </label>
                      <input
                        id="निर्मिती दिनांक"
                        type="date"
                        className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                        placeholder="निर्मिती दिनांक"
                        aria-label="निर्मिती दिनांक"
                        value={data.productionDate}
                        onChange={(e) => {
                          setData({ ...data, productionDate: e.target.value });
                          setproductionDate(e.target.value);
                        }}
                      ></input>
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>
                <div className="max-w-full overflow-x-auto">
                  <table id="id1" className="table border-collapse">
                    <thead>
                      <tr>
                        <th className="border" scope="col">
                          अ.क्र
                        </th>
                        <th className="border" scope="col">
                          मानक परीक्षण/ गतिविधि
                        </th>
                        <th className="border" scope="col">
                          मानक STANDARDS
                        </th>
                        <th className="border" scope="col">
                          वास्तविक
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <label
                            htmlFor="पुर्व-परिक्षण"
                            className="form-label custom-label"
                          ></label>
                          पुर्व परिक्षण a) IR व्हैल्यु 500 V मेगर से
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            10 मेगा ओह्म (कम से कम)
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="पुर्व-परिक्षण"
                              type="text"
                              className="form-control custom-input border border-gray-300 rounded-md p-2 placeholder-center text-center "
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik}
                              onChange={(e) => {
                                setData({ ...data, vastvik: e.target.value });
                                setVastvik(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>
                          <label
                            htmlFor="सफाई "
                            className="form-label custom-label"
                          ></label>
                          सफाई ,बेकींग, वार्निशिंग, बेकींग (एस.एम.आई.86 अनुसार)‌
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            किया
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="सफाई "
                              type="text"
                              className="form-control custom-input border border-gray-300 rounded-md p-2 placeholder-center text-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik1}
                              onChange={(e) => {
                                setData({ ...data, vastvik1: e.target.value });
                                setVastvik1(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>
                          <label
                            htmlFor="वाईंडींग "
                            className="form-label custom-label"
                          ></label>
                          वाईंडींग रेजिस्टन्स (UV-VW-WU)
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="सफाई "
                              type="text"
                              className="border border-gray-300 rounded-md p-2 form-control custom-input placeholder-center text-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.manak3}
                              onChange={(e) => {
                                setData({ ...data, manak3: e.target.value });
                                setManak3(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="row-sm-3">
                            <div className="d-flex flex-row align-items-center">
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="वाईंडींग-UV"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      UV:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="वाईंडींग-UV"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="UV"
                                    aria-label="UV"
                                    value={data.uv}
                                    onChange={(e) => {
                                      setData({ ...data, uv: e.target.value });
                                      setUv(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="वाईंडींग-VW"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      VW:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="वाईंडींग-VW"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="VW"
                                    aria-label="VW"
                                    value={data.vw}
                                    onChange={(e) => {
                                      setData({ ...data, vw: e.target.value });
                                      setVw(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="वाईंडींग-WU"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      WU:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="वाईंडींग-WU"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="WU"
                                    aria-label="WU"
                                    value={data.wu}
                                    onChange={(e) => {
                                      setData({ ...data, wu: e.target.value });
                                      setWu(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>
                          <label
                            htmlFor="सर्ज"
                            className="form-label custom-label"
                          ></label>
                          सर्ज कम्पॅरिजन टेस्ट 3 के.वी. पर (एस.एम.आई.149)
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            नार्मल
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="सर्ज"
                              type="text"
                              className=" text-center form-control border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik4}
                              onChange={(e) => {
                                setData({ ...data, vastvik4: e.target.value });
                                setVastvik4(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>
                          <label
                            htmlFor=""
                            className="form-label custom-label"
                          ></label>
                          इंडक्टंस माप करें
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            फेज से फेज के बीच अंतर 10% से ज्यादा नही
                          </div>
                        </td>
                        <td>
                          <div className="row-sm-3">
                            <div className="d-flex flex-row align-items-center">
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="वाईंडींग-UV"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      UV:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="वाईंडींग-UV"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="UV"
                                    aria-label="UV"
                                    value={data.uv5}
                                    onChange={(e) => {
                                      setData({ ...data, uv5: e.target.value });
                                      setUv5(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="वाईंडींग-VW"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      VW:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="वाईंडींग-VW"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="VW"
                                    aria-label="VW"
                                    value={data.vw5}
                                    onChange={(e) => {
                                      setData({ ...data, vw5: e.target.value });
                                      setVw5(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="वाईंडींग-WU"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      WU:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="वाईंडींग-WU"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="WU"
                                    aria-label="WU"
                                    value={data.wu5}
                                    onChange={(e) => {
                                      setData({ ...data, wu5: e.target.value });
                                      setWu5(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>
                          <label
                            htmlFor="रोटर"
                            className="form-label custom-label"
                          ></label>
                          रोटर का ग्रोव्हलर टेस्ट (एस.एम.आई.163)
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            नार्मल
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="रोटर"
                              type="text"
                              className="border text-center border-gray-300 rounded-md p-2 form-control custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik6}
                              onChange={(e) => {
                                setData({ ...data, vastvik6: e.target.value });
                                setVastvik6(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>
                          <label
                            htmlFor="DPT"
                            className="form-label custom-label"
                          ></label>
                          ईम्पिलर की DPT
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            कोई क्रॅक नही
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="DPT"
                              type="text"
                              className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik7}
                              onChange={(e) => {
                                setData({ ...data, vastvik7: e.target.value });
                                setVastvik7(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td>
                          <label
                            htmlFor="स्टेटर-8"
                            className="form-label custom-label"
                          ></label>
                          स्टेटर बॉडी मे एंड शील्ड बोल्ट के थ्रेड कंडीशन
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            सामान्य
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="स्टेटर-8"
                              type="text"
                              className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik8}
                              onChange={(e) => {
                                setData({ ...data, vastvik8: e.target.value });
                                setVastvik8(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                        <td>
                          <label
                            htmlFor="बिअरिंग"
                            className="form-label custom-label"
                          ></label>
                          बिअरिंग सीट डाया, ड्राईव्हींग एंड (DE)
                          (एस.एम.आई.16अनुसार)
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            40.002 से 40.013 मी.मी.
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="बिअरिंग"
                              type="text"
                              className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik9}
                              onChange={(e) => {
                                setData({ ...data, vastvik9: e.target.value });
                                setVastvik9(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">10</th>
                        <td>
                          <label
                            htmlFor="बिअरिंग10"
                            className="form-label custom-label"
                          ></label>
                          बिअरिंग सीट डाया, नॉन ड्राईव्हींग एंड(NDE)
                          (एस.एम.आई.16अनुसार)
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            सामान्य
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="बिअरिंग10"
                              type="text"
                              className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik10}
                              onChange={(e) => {
                                setData({ ...data, vastvik10: e.target.value });
                                setVastvik10(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">11</th>
                        <td>
                          <div className="row-sm-2">
                            <label
                              htmlFor="कव्हर्सa"
                              className="form-label custom-label"
                            ></label>
                            एंड कव्हर्स बोअर डाया ड्राईव्हींग एंड (DE)
                            (एस.एम.आई.16अनुसार) <br></br>(for Other make Except
                            CGL)
                            <br></br>
                            <br></br>
                            <label
                              htmlFor="कव्हर्सb"
                              className="form-label custom-label"
                            ></label>
                            एंड कव्हर्स बोअर डाया ड्राईव्हींग एंड (DE)
                            (एस.एम.आई.16अनुसार) (for CGL Make)
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            79.994 से 80.013 मी.मी.{" "}
                          </div>
                          <br></br>
                          <br></br>
                          <br></br>
                          <div className="flex items-center justify-center">
                            89.994 to 90.013 मी.मी.
                          </div>
                        </td>
                        <td>
                          <div className="row-sm-2">
                            <div className="flex items-center justify-center">
                              <input
                                id="कव्हर्सa"
                                type="text"
                                className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label=" "
                                value={data.vastvik11}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    vastvik11: e.target.value,
                                  });
                                  setVastvik11(e.target.value);
                                }}
                              ></input>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="flex items-center justify-center">
                              <input
                                id="कव्हर्सb"
                                type="text"
                                className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label=" "
                                value={data.vastvik11_1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    vastvik11_1: e.target.value,
                                  });
                                  setVastvik11_1(e.target.value);
                                }}
                              ></input>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">12</th>
                        <td>
                          <label
                            htmlFor="एंड"
                            className="form-label custom-label"
                          ></label>
                          एंड कव्हर्स बोअर डाया नॉन ड्राईव्हींग एंड (NDE)
                          (एस.एम.आई.16अनुसार)
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            79.994 से 80.013 मी.मी.
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="एंड"
                              type="text"
                              className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik12}
                              onChange={(e) => {
                                setData({ ...data, vastvik12: e.target.value });
                                setVastvik12(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">13</th>
                        <td>
                          <label
                            htmlFor="लीड"
                            className="form-label custom-label"
                          ></label>
                          लीड,लग,टर्मीनल ब्लॉक पर कोई कार्य किया
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            कोई कार्य किया तो लिखे
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="लीड"
                              type="text"
                              className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik13}
                              onChange={(e) => {
                                setData({ ...data, vastvik13: e.target.value });
                                setVastvik13(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">14</th>
                        <td>
                          <label
                            htmlFor="एसेम्बली"
                            className="form-label custom-label"
                          ></label>
                          एसेम्बली के बाद IR व्हॅल्यु
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            कम से कम 10 MΩ
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="एसेम्बली"
                              type="text"
                              className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik14}
                              onChange={(e) => {
                                setData({ ...data, vastvik14: e.target.value });
                                setVastvik14(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <br></br>15
                        </th>
                        <td>
                          <div className="row-sm-2">
                            <br></br>
                            <label
                              htmlFor="करंटa"
                              className="form-label custom-label"
                            ></label>
                            करंट (U-V-W)लाइट रन टेस्ट
                            <br></br>
                            <br></br>
                            <label
                              htmlFor="करंटb"
                              className="form-label custom-label"
                            ></label>
                            करंट (U-V-W)लोड रन टेस्ट
                          </div>
                        </td>
                        <td>
                          <br></br>
                          <br></br>
                          <div className="flex items-center justify-center">
                            3.5 Amp Max{" "}
                          </div>
                          <br></br>

                          <br></br>
                          <br></br>
                          <div className="flex items-center justify-center">
                            8.5 Amp Max<br></br>
                            <br></br>
                          </div>
                        </td>
                        <td>
                          <div className="grid items-center justify-center">
                            <div className="grid grid-row-2 gap-4 ml-5">
                              <div className="flex items-center space-x-4">
                                <div className="row-span-1">
                                  <label
                                    htmlFor="करंटa-U"
                                    className="block col-form-label custom-label"
                                  >
                                    <div className="flex items-center justify-center">
                                      U
                                    </div>
                                  </label>
                                  <input
                                    id="करंटa-U"
                                    type="text"
                                    className="placeholder-center text-center form-input border border-gray-300 rounded-md p-2 custom-input w-16"
                                    placeholder="U"
                                    aria-label="U"
                                    value={data.uv15}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        uv15: e.target.value,
                                      });
                                      setUv15(e.target.value);
                                    }}
                                  ></input>
                                </div>

                                <div className="row-span-1">
                                  <label
                                    htmlFor="करंटa-V"
                                    className="block col-form-label custom-label"
                                  >
                                    <div className="flex items-center justify-center">
                                      V
                                    </div>
                                  </label>
                                  <input
                                    id="करंटa-V"
                                    type="text"
                                    className="placeholder-center text-center form-input border border-gray-300 rounded-md p-2 custom-input w-16"
                                    placeholder="V"
                                    aria-label="V"
                                    value={data.vw15}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        vw15: e.target.value,
                                      });
                                      setVw15(e.target.value);
                                    }}
                                  ></input>
                                </div>

                                <div className="row-span-1">
                                  <label
                                    htmlFor="करंटa-W"
                                    className="block col-form-label custom-label"
                                  >
                                    <div className="flex items-center justify-center">
                                      W
                                    </div>
                                  </label>
                                  <input
                                    id="करंटa-W"
                                    type="text"
                                    className="placeholder-center text-center form-input border border-gray-300 rounded-md p-2 custom-input w-16"
                                    placeholder="W"
                                    aria-label="W"
                                    value={data.wu15}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        wu15: e.target.value,
                                      });
                                      setWu15(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                            </div>

                            <br></br>
                            <div className="grid grid-row-2 gap-4 ml-5">
                              <div className="flex items-center space-x-4">
                                <div className="row-span-2">
                                  <label
                                    htmlFor="करंटa-U"
                                    className="block col-form-label custom-label"
                                  >
                                    <div className="flex items-center justify-center">
                                      U
                                    </div>
                                  </label>
                                  <input
                                    id="करंटa-U"
                                    type="text"
                                    className="placeholder-center text-center form-input border border-gray-300 rounded-md p-2 custom-input w-16"
                                    placeholder="U"
                                    aria-label="U"
                                    value={data.uv15_1}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        uv15_1: e.target.value,
                                      });
                                      setUv15_1(e.target.value);
                                    }}
                                  ></input>
                                </div>

                                <div className="row-span-2">
                                  <label
                                    htmlFor="करंटa-V"
                                    className="block col-form-label custom-label"
                                  >
                                    <div className="flex items-center justify-center">
                                      V
                                    </div>
                                  </label>
                                  <input
                                    id="करंटa-V"
                                    type="text"
                                    className="placeholder-center text-center form-input border border-gray-300 rounded-md p-2 custom-input w-16"
                                    placeholder="V"
                                    aria-label="V"
                                    value={data.vw15_1}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        vw15_1: e.target.value,
                                      });
                                      setVw15_1(e.target.value);
                                    }}
                                  ></input>
                                </div>

                                <div className="row-span-2">
                                  <label
                                    htmlFor="करंटa-W"
                                    className="block col-form-label custom-label"
                                  >
                                    <div className="flex items-center justify-center">
                                      W
                                    </div>
                                  </label>
                                  <input
                                    id="करंटa-W"
                                    type="text"
                                    className="placeholder-center text-center form-input border border-gray-300 rounded-md p-2 custom-input w-16"
                                    placeholder="W"
                                    aria-label="W"
                                    value={data.wu15_1}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        wu15_1: e.target.value,
                                      });
                                      setWu15_1(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">16</th>
                        <td>
                          <div className="row-sm-2">
                            <label
                              htmlFor="SPMa"
                              className="form-label custom-label"
                            ></label>
                            SPM वाईब्रेशन मीटर रिडींग
                            <br></br>
                            <br></br>
                            <label
                              htmlFor="SPMb"
                              className="form-label custom-label"
                            ></label>
                            (एस.एम.आई.58 अनुसार)
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            हरा झोन
                          </div>
                          <br></br>
                          <br></br>
                          <div className="flex items-center justify-center">
                            3.5 mm/sec (Max)
                          </div>
                        </td>
                        <td>
                          <br></br>
                          <div className="row-sm-2">
                            <div className="d-flex flex-row align-items-center">
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="SPMa"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      DE:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="SPMa"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="DE"
                                    aria-label="DE"
                                    value={data.de}
                                    onChange={(e) => {
                                      setData({ ...data, de: e.target.value });
                                      setDe(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="SPMb"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      NDE:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="SPMb"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="NDE"
                                    aria-label="NDE"
                                    value={data.nde}
                                    onChange={(e) => {
                                      setData({ ...data, nde: e.target.value });
                                      setNde(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">17</th>
                        <td>
                          <div className="row-sm-2">
                            <label
                              htmlFor="रन"
                              className="form-label custom-label"
                            ></label>
                            रन टेस्ट, तापमान बढना
                            <br></br>
                            <br></br>
                            <label
                              htmlFor="रन"
                              className="form-label custom-label"
                            ></label>
                            DE/NDE/BODY 30 Min
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            वातावरण से 35°C ज्यादा अधिकतम
                          </div>
                        </td>
                        <td>
                          <div className="row-sm-3">
                            <div className="d-flex flex-row align-items-center">
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="रन-DE"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      DE:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="रन-DE"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="DE"
                                    aria-label="DE"
                                    value={data.de_17}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        de_17: e.target.value,
                                      });
                                      setDe_17(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="रन-Body"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      BODY:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="रन-Body"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="BODY"
                                    aria-label="BODY"
                                    value={data.Body}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        Body: e.target.value,
                                      });
                                      setBody(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="रन-NDE"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      NDE:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="रन-NDE"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="NDE"
                                    aria-label="NDE"
                                    value={data.nde_17}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        nde_17: e.target.value,
                                      });
                                      setNde_17(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th rowSpan="6">18</th>
                        <td>
                          <label
                            htmlFor=""
                            className="col-form-label custom-label"
                          >
                            <span className="whitespace-pre"> </span>
                            <u>मस्ट चेंज आईटम</u>
                          </label>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          a) DE Side बिअरिंग 6208 / C3- (Covered in PL 85010297)
                          सभी मेक के लिये, CGL छोड़कर
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            बदली किया
                          </div>{" "}
                        </td>
                        <td>
                          <div className="d-flex flex-row align-items-center">
                            <div className="row-sm-2">
                              <span style={{ whiteSpace: "pre" }}> </span>
                              <label
                                htmlFor="18a1"
                                className="col-form-label custom-label"
                              >
                                <span className="whitespace-pre">तारीख: </span>{" "}
                              </label>
                              <input
                                id="18a1"
                                type="date"
                                className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                placeholder="Enter"
                                aria-label=" "
                                value={data.tarik_18}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    tarik_18: e.target.value,
                                  });
                                  setTarik_18(e.target.value);
                                }}
                              ></input>
                              <span style={{ whiteSpace: "pre" }}> </span>
                              <label
                                htmlFor="18a2"
                                className="col-form-label custom-label"
                              >
                                <span className="whitespace-pre">Make: </span>{" "}
                              </label>
                              <input
                                id="18a2"
                                type="text"
                                className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                placeholder="Enter"
                                aria-label=" "
                                value={data.manak_18}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    manak_18: e.target.value,
                                  });
                                  setManak_18(e.target.value);
                                }}
                              ></input>
                            </div>

                            <span className="whitespace-pre"> </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          b) DE Side बिअरिंग 6308 / C3- CGL मेक मोटर के लिये
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            बदली किया{" "}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex flex-row align-items-center">
                            <div className="row-sm-2">
                              <span style={{ whiteSpace: "pre" }}> </span>
                              <label
                                htmlFor="18b1"
                                className="col-form-label custom-label"
                              >
                                <span className="whitespace-pre">तारीख: </span>{" "}
                              </label>
                              <input
                                id="18b1"
                                type="date"
                                className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                placeholder="Enter"
                                aria-label=" "
                                value={data.tarik_18_1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    tarik_18_1: e.target.value,
                                  });
                                  setTarik_18_1(e.target.value);
                                }}
                              ></input>
                              <span style={{ whiteSpace: "pre" }}> </span>
                              <label
                                htmlFor="18b2"
                                className="col-form-label custom-label"
                              >
                                <span className="whitespace-pre">Make: </span>{" "}
                              </label>
                              <input
                                id="18b2"
                                type="text"
                                className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                placeholder="Enter"
                                aria-label=" "
                                value={data.manak_18_1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    manak_18_1: e.target.value,
                                  });
                                  setManak_18_1(e.target.value);
                                }}
                              ></input>
                            </div>

                            <span className="whitespace-pre"> </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          c) NDE Side बिअरिंग 6208 / C3- सभी मेक के लिये
                          (Covered in PL 85010297)
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            बदली किया
                          </div>{" "}
                        </td>
                        <td>
                          <div className="d-flex flex-row align-items-center">
                            <div className="row-sm-2">
                              <span style={{ whiteSpace: "pre" }}> </span>
                              <label
                                htmlFor="18c1"
                                className="col-form-label custom-label"
                              >
                                <span className="whitespace-pre">तारीख: </span>{" "}
                              </label>
                              <input
                                id="18c1"
                                type="date"
                                className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                placeholder="Enter"
                                aria-label=" "
                                value={data.tarik_18_2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    tarik_18_2: e.target.value,
                                  });
                                  setTarik_18_2(e.target.value);
                                }}
                              ></input>
                              <span style={{ whiteSpace: "pre" }}> </span>
                              <label
                                htmlFor="18c2"
                                className="col-form-label custom-label"
                              >
                                <span className="whitespace-pre">Make: </span>{" "}
                              </label>
                              <input
                                id="18c2"
                                type="text"
                                className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                placeholder="Enter"
                                aria-label=" "
                                value={data.manak_18_2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    manak_18_2: e.target.value,
                                  });
                                  setManak_18_2(e.target.value);
                                }}
                              ></input>
                            </div>

                            <span className="whitespace-pre"> </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>d) लीड पर ट्रांसपरेंट स्लीव लगाना</td>
                        <td>
                          <div className="flex items-center justify-center">
                            लोकल आर ए पी
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="नये"
                              type="text"
                              className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
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
                          </div>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>e) रबर ग्रोमेट</td>
                        <td>
                          <div className="flex items-center justify-center">
                            बदला / नही बदला
                          </div>{" "}
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="नये"
                              type="text"
                              className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_18_2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_18_2: e.target.value,
                                });
                                setVastvik_18_2(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">19</th>
                        <td>
                          <label
                            htmlFor="नये"
                            className="form-label custom-label"
                          ></label>
                          नये पुर्जे एवं मटेरियल
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            यदि कोई हो
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="नये"
                              type="text"
                              className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik19}
                              onChange={(e) => {
                                setData({ ...data, vastvik19: e.target.value });
                                setVastvik19(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">20</th>
                        <td>
                          <label
                            htmlFor="इम्पेलर"
                            className="form-label custom-label"
                          ></label>
                          इम्पेलर का मेक एवं निर्मिती दिनांक
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="इम्पेलरb"
                              type="text"
                              className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center text-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.manak20}
                              onChange={(e) => {
                                setData({ ...data, manak20: e.target.value });
                                setManak20(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="इम्पेलरc"
                              type="text"
                              className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik20}
                              onChange={(e) => {
                                setData({ ...data, vastvik20: e.target.value });
                                setVastvik20(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br></br>
              </div>
              <footer>
                <div className="container mx-auto p-4">
                  <div className="flex flex-col md:flex-row md:space-x-4 justify-around">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                      <label
                        htmlFor="तकनिशियन"
                        className="form-label custom-label"
                      >
                        <span style={{ whiteSpace: "pre" }}>
                          तकनिशियन का नाम एवं हस्ताक्षर:{" "}
                        </span>
                      </label>
                      <input
                        type="text"
                        required
                        className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                        placeholder="Name"
                        aria-label="Name"
                        value={sign}
                        onChange={(e) => setSign(e.target.value)}
                      ></input>
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
                    <div className="flex items-center space-x-2">
                      <label
                        htmlFor="सुपरवाईजर"
                        className="form-label custom-label"
                      >
                        सुपरवाईजर का नाम एवं हस्ताक्षर:
                      </label>
                    </div>
                  </div>
                </div>
              </footer>

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
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default RevertHistoryInputFieldC2;
