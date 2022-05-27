import {
  IonHeader, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonInput,
  IonItem, IonButton, IonCard, IonCardContent, IonCheckbox, IonFooter, IonList, IonBadge, IonPage
} from '@ionic/react';
import './Home.css';
import React, { useState } from 'react';
// import { useTodoList } from '../hooks/useTodoList';


const Home: React.FC = () => {
  // const { addTask } = useTodoList();
  const [task, setTask] = useState<string>();
  const [checked, setChecked] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
            <IonSegmentButton value="faire">
              <IonItem>
                <IonBadge slot='end' color='secondary'>1</IonBadge>
                <IonLabel>A faire</IonLabel>
              </IonItem>
            </IonSegmentButton>
            <IonSegmentButton value="tous">
              <IonLabel>Tous</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonCard>
        <IonCardContent>
          <IonList>
            <IonItem>
              <small>Votre liste est vide, bravo !</small>
            </IonItem>
            <IonItem>
              <IonLabel>Tâche à faire</IonLabel>
              <IonCheckbox slot='start' checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>

      <IonFooter>
        <IonCard class='inputTask'>
          <IonItem>
            <IonInput value={task} placeholder="Qu'avez vous en tête ?" onIonChange={e => setTask(e.detail.value!)}>
            </IonInput>
            <IonButton class='btnAdd' slot='end' color='secondary' shape='round' >
              Créer
            </IonButton>
          </IonItem>
        </IonCard>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
