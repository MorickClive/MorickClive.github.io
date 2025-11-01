import { useParams, Link, Navigate } from 'react-router-dom';
import getProjects from './getProjects';
import AssassinsShadowProject from '../pages/projects/assassins_shadow/page';
import CommunityMapDevelopmentProject from '../pages/projects/community_map_development/page';
import DestructDroid from '../pages/projects/destruct_droid/page';
import DSTMod from '../pages/projects/dst_mod/page';
import JavaOpenEngine from '../pages/projects/java_opengl_engine/page';
import Procedural from '../pages/projects/procedural_material_generation/page';
import ProjectVale from '../pages/projects/project_vale/page';
import UnityResearch from '../pages/projects/unity_research/page';

// Map project IDs to their components
const PROJECT_COMPONENTS: Record<string, React.ComponentType> = {
    'assassins_shadow': AssassinsShadowProject,
    'community_map_development': CommunityMapDevelopmentProject,
    'destruct_droid': DestructDroid,
    'dst_mod': DSTMod,
    'java_opengl_engine': JavaOpenEngine,
    'procedural_material_generation': Procedural,
    'project_vale': ProjectVale,
    'unity_research': UnityResearch
};

export default function ProjectDetails() {
    const { projectId } = useParams();
    const project = getProjects().find(p => p.id === projectId);

    if (!project || !PROJECT_COMPONENTS[projectId as string]) {
        return <Navigate to="/projects" replace />;
    }

    const ProjectComponent = PROJECT_COMPONENTS[projectId as string];
    return <ProjectComponent />;
}