import React, { useEffect, useState } from 'react';

import { Link, Redirect } from 'react-router-dom';
import Header from '../components/header';
import Button from '../components/button';
import TextField from '../components/text-field';
import Select from '../components/select/select';
import ColorSelect from '../components/color-select';
import ApiService from '../services/apiService';

export default function Create() {
  const [groups, setGroups] = useState([]);
  const [specialities, setSpecialities] = useState([]);
  const [colors, setColors] = useState([]);
  const [genders, setGenders] = useState([]);
  const [speciality, setSpeciality] = useState(undefined);
  const [formState, setFormState] = useState({});
  const [preview, setPreview] = useState();
  const [isRedirected, setIsRedirected] = useState(false);

  useEffect(() => {
    ApiService.fetchColors()
      .then((x) => x.json())
      .then(setColors)
      .catch((x) => console.log(x));
    ApiService.fetchSpecialities()
      .then((x) => x.json())
      .then(setSpecialities)
      .catch((x) => console.log(x));
    ApiService.fetchGenders()
      .then((x) => x.json())
      .then(setGenders)
      .catch((x) => console.log(x));
  }, []);

  useEffect(() => {
    if (speciality)  setGroups(speciality.Groups); 
  }, [speciality]);

  const sendForm = () => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(formState))  formData.append(key, value); 

    ApiService.createUser(formData)
      .then(() => setIsRedirected(true))
      .catch(console.log);
  };

  const handleInputChange = (event) => {
    event.persist();
    if (event.target.type === 'file') {
      setFormState((prev) => ({
        ...prev,
        avatar: event.target.files[0],
      }));
      const blob = URL.createObjectURL(event.target.files[0]);
      const img = new Image();
      img.onload = () => {
        setPreview({ url: blob, width: img.width, height: img.height });
      };

      img.src = blob;

      return;
    }

    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  if (isRedirected)  return <Redirect to="/"/>; 

  return (
    <React.Fragment>
      <Header />
      <div className="container container_page_create">
        <div className="container__controls">
          <Link to="/">
            <p className="controls__title">
              Назад к списку студентов
            </p>
          </Link>
        </div>
        <h1 className="container__title_page_create">Новый студент</h1>
        <form onChange={handleInputChange}>
          <section className="container__change-avatar">
            <div className="change-avatar">
              <img
                className="change-avatar__image"
                src={preview ? preview.url : null}
              />
              <div className="change-avatar__container">
                <label className="change-avatar__label" htmlFor="avatar-input">Сменить аватар</label>
                <input
                  type="file"
                  className="change-avatar__input"
                  id="avatar-input"
                  name="avatar"
                />
                {preview
                  ? (
                      <p className="change-avatar__size">{preview.width}x{preview.height}</p>
                  )
                  : null}

              </div>
            </div>
          </section>
          <section className="container__fields">
            <div className="container__field_name">
              <TextField label="ФИО" placeholder="Имя" name="fullName"/>
            </div>
            <div className="container__field_gender">
              <Select
                placeholder="Выбрать" label="Пол" options={genders}
                onChange={(x) => setFormState((prev) => ({
                  ...prev,
                  GenderId: x.id,
                }))}
                getOptionValue={(x) => x.id}
                getOptionLabel={(x) => x.name}
              />
            </div>
            <div className="container__field_email">
              <TextField label="Email" placeholder="Email" name="email"/>
            </div>
            <div className="container__field_color">
              <ColorSelect
                colors={colors}
                onChange={(id) => {
                  setFormState((prev) => ({
                    ...prev,
                    ColorId: id,
                  }));
                }}
              />
            </div>
            <div className="container__field_speciality">
              <Select
                placeholder="Выбрать" label="Специальность" options={specialities}
                onChange={(x) => {
                  setSpeciality(x);
                  setFormState((prev) => ({
                    ...prev,
                    SpecialityId: x.id,
                  }));
                }}
                getOptionValue={(x) => x.id}
                getOptionLabel={(x) => x.name}
              />
            </div>
            <div className="container__field_group">
              <Select
                placeholder="Выбрать" label="Группа" options={groups}
                onChange={(x) => setFormState((prev) => ({
                  ...prev,
                  GroupId: x.id,
                }))}
                getOptionValue={(x) => x.id}
                getOptionLabel={(x) => x.name}
              />
            </div>
            <div className="container__field_rating">
              <TextField label="Рейтинг" placeholder="0" name="rating"/>
            </div>
            <div className="container__field_age">
              <TextField label="Возраст" placeholder="0" name="age"/>
            </div>
            <div className="container__field_button button_width_long">
              <Button text="Создать" onClick={() => sendForm()}/>
            </div>
          </section>
        </form>
      </div>
    </React.Fragment>
  );
}
