import styled from "styled-components";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PlusCircleFilled, DeleteOutlined } from "@ant-design/icons";

import AdminRoute from "../../../components/hoc/withAdminRoute";
import PrivateRoute from "../../../components/hoc/withPrivateRoute";
import { TextField } from "../../../components/atoms/TextField";
import { SelectComponent } from "../../../components/atoms/Select";
import { ButtonComponent as Button } from "../../../components/atoms/Button";
import { theme } from "../../../theme";
import React, { useEffect, useState } from "react";
import { notification } from "antd";
import { API } from "../../../api";

const Wrapper = styled.div`
  border: 1px solid green;
  border-radius: 12px;
  min-width: 90%;
  min-height: 100vh;
  padding: 12px;
  & .form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const SaveButton = styled.div`
  margin-top: 36px;
  display: flex;
  justify-content: flex-end;
`;

const Label = styled.div`
  ${theme.typography.label};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  margin-bottom: 5px;
  margin-right: 10px;
  font-weight: 500;
`;

const FieldArrayItem = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  align-items: center;
`;

const socialMediaList = [
  { value: "facebook", name: "facebook" },
  { value: "linkedin", name: "linkedin" },
  { value: "twitter", name: "twitter" },
];

const skillList = [
  { value: "mongodb", name: "mongodb" },
  { value: "nodejs", name: "nodejs" },
  { value: "react", name: "react" },
];

const skillLevels = [
  { value: "begineer", name: "begineer" },
  { value: "intermediate", name: "intermediate" },
  { value: "advanced", name: "advanced" },
];

const workPositionList = [
  { value: "manager", name: "manager" },
  { value: "developer", name: "developer" },
  { value: "qa", name: "qa" },
];

const educationLevelList = [
  { value: "school", name: "school" },
  { value: "high-school", name: "high-school" },
  { value: "diploma", name: "diploma" },
  { value: "bachelor-degree", name: "bachelor-degree" },
  { value: "masters-degree", name: "masters-degree" },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  otherEmails: { email: string }[];
  otherPhones: { phone: string }[];
  socialMedias: { name: string; link: string }[];
  skills: { name: string; level: string; experiencePeriod: string }[];
  educations: {
    level: string;
    institute: string;
    fromDate: string;
    toDate: string;
    website: string;
  }[];
  works: {
    position: string;
    company: string;
    fromDate: string;
    toDate: string;
    website: string;
  }[];
};

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
  otherEmails: yup.array().of(
    yup.object({
      email: yup.string().email("Invalid email"),
    })
  ),
  otherPhones: yup.array().of(
    yup.object({
      phone: yup.string().max(10, "Cannot exceed 10 characters"),
    })
  ),
  socialMedias: yup.array().of(
    yup.object({
      name: yup.string().required(),
      link: yup.string().required(),
    })
  ),
  skills: yup.array().of(
    yup.object({
      name: yup.string().required(),
      level: yup.string().required(),
      experiencePeriod: yup.string().required(),
    })
  ),
  educations: yup.array().of(
    yup.object({
      level: yup.string().required(),
      institute: yup.string().required(),
      fromDate: yup.string().required(),
      toDate: yup.string().required(),
      website: yup.string().required(),
    })
  ),
  works: yup.array().of(
    yup.object({
      position: yup.string().required(),
      company: yup.string().required(),
      fromDate: yup.string().required(),
      toDate: yup.string().required(),
      website: yup.string().required(),
    })
  ),
});

const Person = () => {
  const [personData, setPersonData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    otherEmails: [{ email: "" }],
    otherPhones: [{ phone: "" }],
    socialMedias: [{ name: "", link: "" }],
    skills: [{ name: "", level: "", experiencePeriod: "" }],
    educations: [
      {
        level: "",
        institute: "",
        fromDate: "",
        toDate: "",
        website: "",
      },
    ],
    works: [
      {
        position: "",
        company: "",
        fromDate: "",
        toDate: "",
        website: "",
      },
    ],
  });

  const updatePersonData = (person: any) => {
    setPersonData({
      name: person.name || "",
      email: person.email || "",
      phone: person.phone || "",
      otherEmails: person.otherEmails || [],
      otherPhones: person.otherPhones || [],
      socialMedias: person.socialMedias || [],
      skills: person.skills || [],
      educations: person.educations || [],
      works: person.works || [],
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await API.get("/api/person");
        if (res?.data?.data) {
          updatePersonData(res.data.data);
        }
      } catch (error: any) {
        notification.error({
          message: error?.response?.data?.message || "Error occurred",
          duration: 0,
        });
      }
    })();
  }, []);

  useEffect(() => {
    setValue("name", personData.name || "");
    setValue("email", personData.email || "");
    setValue("phone", personData.phone || "");
    setValue("otherEmails", personData.otherEmails || []);
    setValue("otherPhones", personData.otherPhones || []);
    setValue("socialMedias", personData.socialMedias || []);
    setValue("skills", personData.skills || []);
    setValue("educations", personData.educations || []);
    setValue("works", personData.works || []);
  }, [personData]);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: personData,
  });
  const {
    fields: emailFields,
    append: appendEmail,
    remove: removeEmail,
  } = useFieldArray({
    control,
    name: "otherEmails",
  });
  const {
    fields: phoneFields,
    append: appendPhone,
    remove: removePhone,
  } = useFieldArray({
    control,
    name: "otherPhones",
  });
  const {
    fields: socialMediaFields,
    append: appendSocialMedia,
    remove: removeSocialMedia,
  } = useFieldArray({
    control,
    name: "socialMedias",
  });
  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control,
    name: "skills",
  });
  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "educations",
  });
  const {
    fields: workFields,
    append: appendWork,
    remove: removeWork,
  } = useFieldArray({
    control,
    name: "works",
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await API.put("/api/person", data);
      if (res?.data?.data) {
        updatePersonData(res.data.data);
        notification.success({ message: res.data.message });
      }
    } catch (error: any) {
      notification.error({
        message: error?.response?.data?.message || "Error occurred",
        duration: 0,
      });
    }
  });

  return (
    <Wrapper>
      <form className="form-wrapper" onSubmit={onSubmit}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Fullname"
              placeholder="Fullname"
              showCounting
              maxLength={50}
              height="36px"
              error={errors?.name?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              placeholder="Email"
              height="36px"
              error={errors?.email?.message}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone"
              placeholder="Phone"
              height="36px"
              error={errors?.phone?.message}
            />
          )}
        />
        <div>
          <Label>
            Optional Emails
            <PlusCircleFilled
              onClick={() => {
                appendEmail({ email: "" });
              }}
              style={{
                fontSize: "24px",
                color: theme.line,
              }}
            />
          </Label>
          {emailFields.map((item, index) => {
            return (
              <FieldArrayItem key={item.id}>
                <Controller
                  name={`otherEmails.${index}.email`}
                  control={control}
                  defaultValue={item?.email}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      height="36px"
                      width="500px"
                      error={errors?.otherEmails?.[index]?.email?.message}
                    />
                  )}
                />
                <DeleteOutlined
                  onClick={() => {
                    removeEmail(index);
                  }}
                  style={{
                    fontSize: "24px",
                    color: theme.red,
                  }}
                />
              </FieldArrayItem>
            );
          })}
        </div>
        <div>
          <Label>
            Optional Phones
            <PlusCircleFilled
              onClick={() => {
                appendPhone({ phone: "" });
              }}
              style={{
                fontSize: "24px",
                color: theme.line,
              }}
            />
          </Label>
          {phoneFields.map((item, index) => {
            return (
              <FieldArrayItem key={item.id}>
                <Controller
                  name={`otherPhones.${index}.phone`}
                  control={control}
                  defaultValue={item?.phone}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      height="36px"
                      width="500px"
                      error={errors?.otherPhones?.[index]?.phone?.message}
                    />
                  )}
                />
                <DeleteOutlined
                  onClick={() => {
                    removePhone(index);
                  }}
                  style={{
                    fontSize: "24px",
                    color: theme.red,
                  }}
                />
              </FieldArrayItem>
            );
          })}
        </div>
        <div>
          <Label>
            Social Medias
            <PlusCircleFilled
              onClick={() => {
                appendSocialMedia({ name: "", link: "" });
              }}
              style={{
                fontSize: "24px",
                color: theme.line,
              }}
            />
          </Label>
          {socialMediaFields.map((item, index) => {
            return (
              <FieldArrayItem key={item.id}>
                <Controller
                  name={`socialMedias.${index}.name`}
                  control={control}
                  defaultValue={item?.name}
                  render={({ field }) => (
                    <SelectComponent
                      {...field}
                      label="name:"
                      options={socialMediaList}
                      height="36px"
                      width="450px"
                      error={errors?.socialMedias?.[index]?.name?.message}
                    />
                  )}
                />
                <Controller
                  name={`socialMedias.${index}.link`}
                  control={control}
                  defaultValue={item?.link}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="link:"
                      height="36px"
                      width="450px"
                      error={errors?.socialMedias?.[index]?.link?.message}
                    />
                  )}
                />
                <DeleteOutlined
                  onClick={() => {
                    removeSocialMedia(index);
                  }}
                  style={{
                    fontSize: "24px",
                    color: theme.red,
                  }}
                />
              </FieldArrayItem>
            );
          })}
        </div>
        <div>
          <Label>
            Skills
            <PlusCircleFilled
              onClick={() => {
                appendSkill({ name: "", level: "", experiencePeriod: "" });
              }}
              style={{
                fontSize: "24px",
                color: theme.line,
              }}
            />
          </Label>
          {skillFields.map((item, index) => {
            return (
              <FieldArrayItem key={item.id}>
                <Controller
                  name={`skills.${index}.name`}
                  control={control}
                  defaultValue={item?.name}
                  render={({ field }) => (
                    <SelectComponent
                      {...field}
                      label="name:"
                      options={skillList}
                      height="36px"
                      width="300px"
                      error={errors?.skills?.[index]?.name?.message}
                    />
                  )}
                />
                <Controller
                  name={`skills.${index}.level`}
                  control={control}
                  defaultValue={item?.level}
                  render={({ field }) => (
                    <SelectComponent
                      {...field}
                      options={skillLevels}
                      label="level:"
                      height="36px"
                      width="300px"
                      error={errors?.skills?.[index]?.level?.message}
                    />
                  )}
                />
                <Controller
                  name={`skills.${index}.experiencePeriod`}
                  control={control}
                  defaultValue={item?.experiencePeriod}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="experience period:"
                      height="36px"
                      width="200px"
                      error={errors?.skills?.[index]?.experiencePeriod?.message}
                    />
                  )}
                />
                <DeleteOutlined
                  onClick={() => {
                    removeSkill(index);
                  }}
                  style={{
                    fontSize: "24px",
                    color: theme.red,
                  }}
                />
              </FieldArrayItem>
            );
          })}
        </div>
        <div>
          <Label>
            Educations
            <PlusCircleFilled
              onClick={() => {
                appendEducation({
                  level: "",
                  institute: "",
                  fromDate: "",
                  toDate: "",
                  website: "",
                });
              }}
              style={{
                fontSize: "24px",
                color: theme.line,
              }}
            />
          </Label>
          {educationFields.map((item, index) => {
            return (
              <FieldArrayItem key={item.id}>
                <Controller
                  name={`educations.${index}.level`}
                  control={control}
                  defaultValue={item?.level}
                  render={({ field }) => (
                    <SelectComponent
                      {...field}
                      label="level:"
                      options={educationLevelList}
                      height="36px"
                      width="300px"
                      error={errors?.educations?.[index]?.level?.message}
                    />
                  )}
                />
                <div>
                  <Controller
                    name={`educations.${index}.institute`}
                    control={control}
                    defaultValue={item?.institute}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="institute:"
                        height="36px"
                        width="200px"
                        error={errors?.educations?.[index]?.institute?.message}
                      />
                    )}
                  />
                  <Controller
                    name={`educations.${index}.website`}
                    control={control}
                    defaultValue={item?.website}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="website:"
                        height="36px"
                        width="200px"
                        error={errors?.educations?.[index]?.website?.message}
                      />
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name={`educations.${index}.fromDate`}
                    control={control}
                    defaultValue={item?.fromDate}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="fromDate:"
                        height="36px"
                        width="200px"
                        error={errors?.educations?.[index]?.fromDate?.message}
                      />
                    )}
                  />
                  <Controller
                    name={`educations.${index}.toDate`}
                    control={control}
                    defaultValue={item?.toDate}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="toDate:"
                        height="36px"
                        width="200px"
                        error={errors?.educations?.[index]?.toDate?.message}
                      />
                    )}
                  />
                </div>
                <DeleteOutlined
                  onClick={() => {
                    removeEducation(index);
                  }}
                  style={{
                    fontSize: "24px",
                    color: theme.red,
                  }}
                />
              </FieldArrayItem>
            );
          })}
        </div>
        <div>
          <Label>
            Work Experiences
            <PlusCircleFilled
              onClick={() => {
                appendWork({
                  position: "",
                  company: "",
                  fromDate: "",
                  toDate: "",
                  website: "",
                });
              }}
              style={{
                fontSize: "24px",
                color: theme.line,
              }}
            />
          </Label>
          {workFields.map((item, index) => {
            return (
              <FieldArrayItem key={item.id}>
                <Controller
                  name={`works.${index}.position`}
                  control={control}
                  defaultValue={item?.position}
                  render={({ field }) => (
                    <SelectComponent
                      {...field}
                      label="position:"
                      options={workPositionList}
                      height="36px"
                      width="300px"
                      error={errors?.works?.[index]?.position?.message}
                    />
                  )}
                />
                <div>
                  <Controller
                    name={`works.${index}.company`}
                    control={control}
                    defaultValue={item?.company}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="company:"
                        height="36px"
                        width="200px"
                        error={errors?.works?.[index]?.company?.message}
                      />
                    )}
                  />
                  <Controller
                    name={`works.${index}.website`}
                    control={control}
                    defaultValue={item?.website}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="website:"
                        height="36px"
                        width="200px"
                        error={errors?.works?.[index]?.website?.message}
                      />
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name={`works.${index}.fromDate`}
                    control={control}
                    defaultValue={item?.fromDate}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="fromDate:"
                        height="36px"
                        width="200px"
                        error={errors?.works?.[index]?.fromDate?.message}
                      />
                    )}
                  />
                  <Controller
                    name={`works.${index}.toDate`}
                    control={control}
                    defaultValue={item?.toDate}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="toDate:"
                        height="36px"
                        width="200px"
                        error={errors?.works?.[index]?.toDate?.message}
                      />
                    )}
                  />
                </div>
                <DeleteOutlined
                  onClick={() => {
                    removeWork(index);
                  }}
                  style={{
                    fontSize: "24px",
                    color: theme.red,
                  }}
                />
              </FieldArrayItem>
            );
          })}
        </div>
        <SaveButton>
          <Button htmlType="submit" height="36px" width="150px">
            Save
          </Button>
        </SaveButton>
      </form>
    </Wrapper>
  );
};

export default AdminRoute(PrivateRoute(Person));
